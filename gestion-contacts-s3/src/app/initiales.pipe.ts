/* ============================================================
   EXERCICE 4 — Pipe Personnalisé
   Partie B : Pipe 'initiales' — Extrait les initiales d'un nom
   ============================================================ */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initiales',
  standalone: true,
})
export class InitialesPipe implements PipeTransform {
  transform(valeur: string, sep: string = '.'): string {
    if (!valeur || valeur.trim() === '') return '';

    return valeur
      .trim()
      .split(' ')
      .filter(mot => mot.length > 0)
      .map(mot => mot[0].toUpperCase())
      .join(sep);
  }
}
