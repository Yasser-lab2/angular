/* ============================================================
   EXERCICE 6 — Application Complète (Assemblage final)
   AppComponent — Composant racine qui assemble tous les modules
   ============================================================ */
import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';
import { Contact } from './contact.interface';
import { ListeContactsComponent } from './liste-contacts/liste-contacts.component';
import { FormulaireContactComponent } from './formulaire-contact/formulaire-contact.component';
import { StatsContactsComponent } from './stats-contacts/stats-contacts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ListeContactsComponent,
    FormulaireContactComponent,
    StatsContactsComponent,
  ],
  template: `
    <h1>📈 Gestionnaire de Contacts Angular 20</h1>
    <p><em>TP3 — Directives, Pipes & Services (Pr. CHAKRI Sana)</em></p>

    <!-- Statistiques en haut -->
    <app-stats-contacts></app-stats-contacts>

    <!-- Formulaire d'ajout -->
    <app-formulaire-contact (contactAjoute)="onContactAjoute($event)">
    </app-formulaire-contact>

    <!-- Liste des contacts -->
    <app-liste-contacts></app-liste-contacts>

    <!-- EXERCICE 3 — Utilisation de la directive appHighlight avec @HostBinding -->
    <hr />
    <div appHighlight [isActive]="true">
      <p><strong>Zone de démonstration — Directive appHighlight</strong></p>
      <p>Passez la souris ici pour voir l'effet @HostBinding (classe .hovered + box-shadow)</p>
    </div>
  `,
})
export class AppComponent implements OnInit {
  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    console.log('App initialisée. Contacts :', this.contactService.getAll().length);
  }

  onContactAjoute(contact: Contact): void {
    this.contactService.ajouter(contact);
  }
}
