import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar],
  template: `
    <app-navbar></app-navbar>
    <main class="contenu-principal">
      <router-outlet />
    </main>
  `,
  styles: [
    `
      .contenu-principal {
        padding: 24px;
        max-width: 1200px;
        margin: 0 auto;
      }
    `,
  ],
})
export class App {}
