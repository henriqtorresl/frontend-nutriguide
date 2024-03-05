import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { LoginService } from 'src/app/services/login-service/login.service';
import { NutricionistaService } from 'src/app/services/nutricionista-service/nutricionista.service';
import { UsuarioService } from 'src/app/services/usuario-service/usuario.service';
import Tabs from '../tabs/tabs.component';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {

  tabs: Tabs[] = [
    {
      name: 'Informações Pessoais',
      key: 'a',
      isActive: true
    }, 
    {
      name: 'Informações Sobre o Nutri',
      key: 'b',
      isActive: false
    }
  ];

  key: string = 'a';

  formulario!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private loginService: LoginService,
    private snackBar: MatSnackBar,
    private usuarioService: UsuarioService,
    private nutricionistaService: NutricionistaService
  ) {}

  ngOnInit(): void {
    this.criarFormulario();
  }

  criarFormulario(): void {
    this.formulario = this.formBuilder.group({
      nome: [],
      email: []
    });
  }

  cadastro(): void {
    const usuario = {
      nome: this.formulario.controls['nome'].value,
      email: this.formulario.controls['email'].value
    }

    this.loginService.login(usuario).subscribe(
    (r) => {
      const token = r.token;
      const msg = r.msg;

      localStorage.setItem('token', token);
      localStorage.setItem('nome', usuario.nome);

      this.snackBar.open(msg, 'OK', {duration: 2500});
  
      this.usuarioService.getUserByName(usuario.nome)
      .pipe(take(1))
      .subscribe((user) => {

        localStorage.setItem('role', user.tipo_usuario);

        if(user.tipo_usuario === 'nutricionista') {

          this.nutricionistaService.getAll().subscribe((nutri) => {
            nutri.forEach((n) => {

              if (n.id_usuario === user.id_usuario) {
                localStorage.setItem('idNutri', n.id_nutricionista.toString());
                
                this.router.navigate(['/consultar-pacientes']);
              }
            });
          });
        } else {
          this.router.navigate(['/inicio']); 
        }

      })
    },
    (e) => {
      const msg: string = e.error.msg;
      this.snackBar.open(msg, 'OK', {duration: 2500});
    })
  }

  cancelar(): void {
    this.router.navigate(['/inicio']); 
  }

  abrirTab(key: string) {
    this.key = key;
  }

}