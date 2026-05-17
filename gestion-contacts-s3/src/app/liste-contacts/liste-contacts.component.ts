/* ============================================================
   EXERCICE 1 — Directives Structurelles (@if, @for, @switch)
   Partie A & B : Interface Contact, données de démo, filtre
   Partie C : @for avec variables spéciales
   Partie D : @switch pour le rôle

   EXERCICE 2 — ngClass sur les lignes (template HTML)

   EXERCICE 4 — Pipes (imports: InitialesPipe, MentionPipe)

   EXERCICE 5 — Injection du ContactService
   ============================================================ */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService } from '../contact.service';
import { Contact } from '../contact.interface';
import { SurvolDirective } from '../survol.directive';
import { InitialesPipe } from '../initiales.pipe';
import { MentionPipe } from '../mention.pipe';

@Component({
  selector: 'app-liste-contacts',
  standalone: true,
  imports: [CommonModule, SurvolDirective, InitialesPipe, MentionPipe],
  templateUrl: './liste-contacts.component.html',
  styleUrl: './liste-contacts.component.css',
})
export class ListeContactsComponent implements OnInit {
  contacts: Contact[] = [];
  filtreActif: boolean | null = null;

  get contactsFiltres(): Contact[] {
    if (this.filtreActif === null) return this.contacts;
    return this.contacts.filter(c => c.actif === this.filtreActif);
  }

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contacts = this.contactService.getAll();
  }

  supprimer(email: string): void {
    this.contactService.supprimer(email);
    this.contacts = this.contactService.getAll();
  }

  toggleActif(email: string): void {
    this.contactService.toggleActif(email);
    this.contacts = this.contactService.getAll();
  }
}
