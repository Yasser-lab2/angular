import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-introuvable',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="error-page">
      <h1>404 — Page introuvable</h1>
      <p>L'URL demandée n'existe pas.</p>
      <a routerLink="/accueil">Retour à l'accueil</a>
    </div>
  `,
  styles: [
    `
      .error-page {
        text-align: center;
        padding: 60px 20px;
      }

      h1 {
        font-size: 3em;
        color: #DD0031;
      }

      a {
        display: inline-block;
        margin-top: 20px;
        padding: 10px 24px;
        background: #DD0031;
        color: white;
        text-decoration: none;
        border-radius: 4px;
      }

      a:hover {
        background: #b80028;
      }
    `,
  ],
})
export class PageIntrouvable {}
