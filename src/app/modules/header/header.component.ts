import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() rota!: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log(this.rota);
  } 

  irParaLogin(): void {
    this.router.navigate(['/login'], { relativeTo: this.route.parent })
  }

  irParaMeuPerfil(): void {
    this.router.navigate(['/informacoes-pessoais'], { relativeTo: this.route.parent });
  }

  irParaMinhaComunidade(): void {
    const idNutri: string = String(localStorage.getItem('idNutri'));

    if (idNutri !== '' && idNutri !== null && idNutri !== undefined) {
      this.router.navigate(['/minha-comunidade', localStorage.getItem('idNutri')], { relativeTo: this.route.parent });
    }
  }

}