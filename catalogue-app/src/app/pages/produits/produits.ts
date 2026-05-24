import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { ProduitService, Produit } from '../../produit';

@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  template: `
    <div>
      <h1>📋 Catalogue — {{ produits.length }} produit(s)</h1>

      <div class="grille-produits">
        @for (p of produits; track p.id) {
          <div class="carte-produit">
            <h3>{{ p.nom }}</h3>
            <p class="categorie">{{ p.categorie }}</p>
            <p class="prix">{{ p.prix | currency:'MAD':'code':'1.0-0' }}</p>
            <p [class.rupture]="!p.enStock">
              {{ p.enStock ? '✅ En stock' : '❌ Rupture' }}
            </p>
            <a [routerLink]="['/produits', p.id]" class="btn-detail">
              Voir le détail →
            </a>
          </div>
        }
      </div>
    </div>
  `,
  styles: [
    `
      .grille-produits {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
        gap: 20px;
        margin-top: 20px;
      }

      .carte-produit {
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        padding: 16px;
        background: #fafafa;
      }

      .carte-produit h3 {
        margin: 0 0 8px;
        color: #1A1A2E;
      }

      .categorie {
        font-size: 0.85em;
        color: #666;
        margin: 0 0 8px;
      }

      .prix {
        font-size: 1.3em;
        font-weight: bold;
        color: #DD0031;
        margin: 8px 0;
      }

      .rupture {
        color: #999;
      }

      .btn-detail {
        display: inline-block;
        margin-top: 10px;
        padding: 8px 16px;
        background: #DD0031;
        color: white;
        text-decoration: none;
        border-radius: 4px;
      }

      .btn-detail:hover {
        background: #b80028;
      }
    `,
  ],
})
export class Produits implements OnInit {
  produits: Produit[] = [];

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    this.produits = this.produitService.getAll();
  }
}
