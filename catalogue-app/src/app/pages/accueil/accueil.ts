import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  standalone: true,
  template: `
    <h1>🏠 Bienvenue sur CatalogueApp !</h1>
    <p>Navigation Angular 21 — Séance 4 : Routage & Navigation</p>
    <p>Utilisez la barre de navigation pour explorer les différentes pages.</p>
  `,
  styles: [
    `
      h1 { color: #DD0031; }
    `,
  ],
})
export class Accueil {}
