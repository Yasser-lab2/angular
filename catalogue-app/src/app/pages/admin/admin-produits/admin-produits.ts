import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-produits',
  standalone: true,
  template: `
    <div>
      <h2>📦 Gestion des Produits</h2>
      <p>Page de gestion des produits (protégée par le Guard).</p>
    </div>
  `,
})
export class AdminProduits {}
