import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar">
      <span class="logo">📦 CatalogueApp</span>

      <a routerLink="/accueil"
         routerLinkActive="actif"
         [routerLinkActiveOptions]="{exact: true}">
        🏠 Accueil
      </a>

      <a routerLink="/produits"
         routerLinkActive="actif">
        📋 Produits
      </a>

      <a routerLink="/contact"
         routerLinkActive="actif">
        📧 Contact
      </a>

      <a routerLink="/admin"
         routerLinkActive="actif">
        🔒 Admin
      </a>

      <a routerLink="/login"
         routerLinkActive="actif">
        🔑 Connexion
      </a>
    </nav>
  `,
  styles: [
    `
      .navbar {
        display: flex;
        align-items: center;
        gap: 8px;
        background: #1A1A2E;
        padding: 12px 24px;
      }

      .logo {
        font-weight: bold;
        color: #DD0031;
        margin-right: auto;
        font-size: 18px;
      }

      a {
        text-decoration: none;
        padding: 8px 16px;
        color: #B0BEC5;
        border-radius: 4px;
        transition: background 0.2s;
      }

      a.actif {
        color: white;
        background: #DD0031;
        font-weight: bold;
      }

      a:hover:not(.actif) {
        background: rgba(255,255,255,0.1);
        color: white;
      }
    `,
  ],
})
export class Navbar {}
