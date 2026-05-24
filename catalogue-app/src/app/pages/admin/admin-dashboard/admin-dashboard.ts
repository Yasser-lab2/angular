import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  template: `
    <div>
      <h2>📊 Tableau de bord Admin</h2>
      <p>Bienvenue, <strong>{{ authService.getUtilisateur() }}</strong> !</p>

      <div class="stats">
        <div class="stat-card">📦 Produits : 5</div>
        <div class="stat-card">👥 Utilisateurs : 3</div>
        <div class="stat-card">📋 Commandes : 12</div>
      </div>

      <button class="btn-deconnexion" (click)="seDeconnecter()">
        🚪 Se déconnecter
      </button>
    </div>
  `,
  styles: [
    `
      .stats {
        display: flex;
        gap: 16px;
        margin: 20px 0;
      }

      .stat-card {
        padding: 20px;
        background: #f5f5f5;
        border-radius: 8px;
        border: 1px solid #e0e0e0;
        font-size: 1.1em;
        font-weight: bold;
      }

      .btn-deconnexion {
        padding: 10px 20px;
        background: #546e7a;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 1em;
      }

      .btn-deconnexion:hover {
        background: #37474f;
      }
    `,
  ],
})
export class AdminDashboard {
  constructor(
    public authService: AuthService,
    private router: Router,
  ) {}

  seDeconnecter(): void {
    this.authService.deconnecter();
    this.router.navigate(['/accueil']);
  }
}
