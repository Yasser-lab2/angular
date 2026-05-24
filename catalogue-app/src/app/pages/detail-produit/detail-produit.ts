import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { ProduitService, Produit } from '../../produit';

@Component({
  selector: 'app-detail-produit',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  template: `
    <div>
      <a routerLink="/produits" class="btn-retour">← Retour à la liste</a>

      @if (produit) {
        <div class="fiche-produit">
          <h1>{{ produit.nom }}</h1>
          <p class="categorie">📂 {{ produit.categorie }}</p>
          <p class="description">{{ produit.description }}</p>
          <p class="prix">{{ produit.prix | currency:'MAD':'code':'1.0-0' }}</p>
          <p>
            Disponibilité :
            @if (produit.enStock) {
              <span class="stock-ok">✅ En stock</span>
            } @else {
              <span class="rupture">❌ Rupture de stock</span>
            }
          </p>
        </div>
      } @else {
        <div class="not-found">
          <h2>❌ Produit introuvable</h2>
          <p>Aucun produit avec l'identifiant : {{ id }}</p>
          <a routerLink="/produits">Voir tous les produits</a>
        </div>
      }
    </div>
  `,
  styles: [
    `
      .btn-retour {
        display: inline-block;
        margin-bottom: 20px;
        color: #DD0031;
        text-decoration: none;
        font-weight: bold;
      }

      .fiche-produit {
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        padding: 24px;
        background: #fafafa;
      }

      .categorie {
        color: #666;
        font-size: 0.9em;
      }

      .description {
        font-size: 1.1em;
        margin: 16px 0;
      }

      .prix {
        font-size: 1.5em;
        font-weight: bold;
        color: #DD0031;
      }

      .stock-ok {
        color: #2e7d32;
        font-weight: bold;
      }

      .rupture {
        color: #c62828;
        font-weight: bold;
      }

      .not-found {
        text-align: center;
        padding: 40px;
      }
    `,
  ],
})
export class DetailProduit implements OnInit {
  id = '';
  produit: Produit | undefined;

  constructor(
    private route: ActivatedRoute,
    private produitService: ProduitService,
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.produit = this.produitService.getById(+this.id);
    console.log('Produit demandé :', this.id, '→', this.produit?.nom);
  }
}
