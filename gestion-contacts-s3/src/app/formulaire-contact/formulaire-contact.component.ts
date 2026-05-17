/* ============================================================
   EXERCICE 6 — Application Complète
   FormulaireContactComponent — Ajout de nouveaux contacts
   Utilise [(ngModel)] et @Output pour communiquer avec AppComponent
   ============================================================ */
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Contact } from '../contact.interface';

@Component({
  selector: 'app-formulaire-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div>
      <h3>Ajouter un contact</h3>
      <form (ngSubmit)="ajouterContact()">
        <input [(ngModel)]="nouveauContact.nom" name="nom" placeholder="Nom" required />
        <input [(ngModel)]="nouveauContact.email" name="email" placeholder="Email" required />
        <input [(ngModel)]="nouveauContact.score" name="score" type="number" placeholder="Score (0-20)" min="0" max="20" required />
        <select [(ngModel)]="nouveauContact.role" name="role">
          <option value="admin">Admin</option>
          <option value="user">Utilisateur</option>
          <option value="guest">Visiteur</option>
        </select>
        <label>
          <input [(ngModel)]="nouveauContact.actif" name="actif" type="checkbox" /> Actif
        </label>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  `,
})
export class FormulaireContactComponent {
  @Output() contactAjoute = new EventEmitter<Contact>();

  nouveauContact: Contact = {
    nom: '',
    email: '',
    actif: true,
    score: 10,
    role: 'user',
  };

  ajouterContact(): void {
    if (!this.nouveauContact.nom || !this.nouveauContact.email) return;
    this.contactAjoute.emit({ ...this.nouveauContact });
    this.nouveauContact = { nom: '', email: '', actif: true, score: 10, role: 'user' };
  }
}
