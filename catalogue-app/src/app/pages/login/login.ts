import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="login-container">
      <h1>🔑 Connexion</h1>

      @if (erreur) {
        <div class="erreur">{{ erreur }}</div>
      }

      <form (ngSubmit)="connecter()">
        <input [(ngModel)]="email"
               name="email"
               type="email"
               placeholder="Adresse email" required>

        <input [(ngModel)]="password"
               name="password"
               type="password"
               placeholder="Mot de passe" required>

        <button type="submit">🔑 Se connecter</button>
        <button type="button" class="btn-annuler" (click)="annuler()">❌ Annuler</button>
      </form>

      <p class="indice">Essayez n'importe quel email/mot de passe pour tester.</p>
    </div>
  `,
  styles: [
    `
      .login-container {
        max-width: 400px;
        margin: 0 auto;
      }

      .erreur {
        background: #ffebee;
        color: #c62828;
        padding: 10px;
        border-radius: 4px;
        margin-bottom: 12px;
      }

      form {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      input {
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 1em;
      }

      button {
        padding: 12px;
        background: #DD0031;
        color: white;
        border: none;
        border-radius: 4px;
        font-size: 1em;
        cursor: pointer;
      }

      button:hover {
        background: #b80028;
      }

      .btn-annuler {
        background: #546e7a;
      }

      .btn-annuler:hover {
        background: #37474f;
      }

      .indice {
        margin-top: 16px;
        font-size: 0.85em;
        color: #666;
        text-align: center;
      }
    `,
  ],
})
export class Login {
  email = '';
  password = '';
  erreur = '';

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

  connecter(): void {
    if (!this.email || !this.password) {
      this.erreur = 'Veuillez remplir tous les champs.';
      return;
    }

    this.authService.connecter(this.email);
    this.router.navigate(['/admin']);
  }

  annuler(): void {
    this.router.navigate(['/accueil']);
  }
}
