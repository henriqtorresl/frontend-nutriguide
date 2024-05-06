import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  rota!: string;

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buscarRotaAtual();
  }

  buscarRotaAtual(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.rota = event.url;
    });
  }

}