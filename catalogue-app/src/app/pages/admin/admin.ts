import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../auth';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="admin-layout">
      <aside class="admin-sidebar">
        <h2>🔒 Administration</h2>

        <nav>
          <a routerLink="/admin"
             routerLinkActive="actif"
             [routerLinkActiveOptions]="{exact:true}">
            📊 Dashboard
          </a>
          <a routerLink="/admin/users"
             routerLinkActive="actif">
            👥 Utilisateurs
          </a>
          <a routerLink="/admin/produits"
             routerLinkActive="actif">
            📦 Produits
          </a>
        </nav>

        <p class="connecte">Connecté : <strong>{{ authService.getUtilisateur() }}</strong></p>
      </aside>

      <main class="admin-content">
        <router-outlet />
      </main>
    </div>
  `,
  styles: [
    `
      .admin-layout {
        display: flex;
        gap: 24px;
      }

      .admin-sidebar {
        width: 240px;
        padding: 16px;
        background: #f5f5f5;
        border-radius: 8px;
        border: 1px solid #e0e0e0;
      }

      .admin-sidebar h2 {
        margin-top: 0;
        color: #1A1A2E;
      }

      .admin-sidebar nav {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      .admin-sidebar a {
        text-decoration: none;
        padding: 8px 12px;
        color: #333;
        border-radius: 4px;
        transition: background 0.2s;
      }

      .admin-sidebar a.actif {
        background: #DD0031;
        color: white;
        font-weight: bold;
      }

      .admin-sidebar a:hover:not(.actif) {
        background: #e0e0e0;
      }

      .connecte {
        margin-top: 24px;
        font-size: 0.85em;
        color: #666;
      }

      .admin-content {
        flex: 1;
      }
    `,
  ],
})
export class Admin {
  constructor(public authService: AuthService) {}
}
