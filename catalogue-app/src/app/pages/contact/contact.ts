import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="contact-container">
      <h1>📧 Contact</h1>

      <form (ngSubmit)="envoyer()">
        <input [(ngModel)]="nom"
               name="nom"
               type="text"
               placeholder="Votre nom" required>

        <input [(ngModel)]="email"
               name="email"
               type="email"
               placeholder="Votre email" required>

        <textarea [(ngModel)]="message"
                  name="message"
                  placeholder="Votre message" required></textarea>

        <button type="submit">📧 Envoyer</button>
      </form>
    </div>
  `,
  styles: [
    `
      .contact-container {
        max-width: 500px;
        margin: 0 auto;
      }

      form {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      input, textarea {
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 1em;
      }

      textarea {
        min-height: 120px;
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
    `,
  ],
})
export class Contact {
  nom = '';
  email = '';
  message = '';

  constructor(private router: Router) {}

  envoyer(): void {
    if (this.nom && this.email && this.message) {
      console.log('Message envoyé :', { nom: this.nom, email: this.email });
      this.router.navigate(['/accueil']);
    }
  }
}
