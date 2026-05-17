/* ============================================================
   EXERCICE 2 — ngStyle pour la barre de progression
   Partie B : Barre de score dynamique avec couleurs

   EXERCICE 5 — Injection du ContactService (singleton)
   ============================================================ */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-stats-contacts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats-contacts.component.html',
})
export class StatsContactsComponent implements OnInit {
  totalContacts: number = 0;
  totalActifs: number   = 0;
  scoreMoyen: number    = 0;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.totalContacts = this.contactService.getAll().length;
    this.totalActifs   = this.contactService.getActifs().length;
    this.scoreMoyen    = this.contactService.getScoreMoyen();
  }

  get tauxActivite(): number {
    if (this.totalContacts === 0) return 0;
    return Math.round((this.totalActifs / this.totalContacts) * 100);
  }

  get couleurBarre(): string {
    if (this.tauxActivite >= 70) return '#4CAF50';
    if (this.tauxActivite >= 40) return '#FF9800';
    return '#F44336';
  }
}
