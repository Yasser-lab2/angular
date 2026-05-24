import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-users',
  standalone: true,
  template: `
    <div>
      <h2>👥 Gestion des Utilisateurs</h2>
      <p>Page de gestion des utilisateurs (protégée par le Guard).</p>
    </div>
  `,
})
export class AdminUsers {}
