# Réponses aux Questions de Compréhension — TP3 Angular 20

## Exercice 1 — Directives Structurelles

**1. Quelle est la différence entre @if (condition) { } et *ngIf dans le template ?**
`@if` est la nouvelle syntaxe de contrôle d'Angular 17+ (déclarative, plus lisible). `*ngIf` est l'ancienne syntaxe basée sur des microsyntaxes et des directives structurelles. `@if` ne nécessite pas d'import (contrairement à `*ngIf` qui nécessite `CommonModule`), et offre nativement `@else if` / `@else` sans avoir à chaîner plusieurs `*ngIf`.

**2. Pourquoi faut-il obligatoirement track dans @for ? Quel problème évite-t-on ?**
`track` permet à Angular d'identifier de manière unique chaque élément de la liste. Cela évite de re-rendre tout le DOM à chaque modification (suppression/ajout). Sans `track`, Angular détruirait et recréerait tous les éléments DOM, ce qui dégraderait les performances et perdrait l'état interne (focus, scroll, etc.).

**3. Quelles sont les 6 variables spéciales disponibles dans @for ?**
`$index` (indice 0-based), `$count` (taille totale), `$first` (premier élément), `$last` (dernier élément), `$even` (indice pair), `$odd` (indice impair).

**4. Peut-on imbriquer un @if dans un @for ? Et un @for dans un @if ?**
Oui, on peut parfaitement imbriquer ces blocs de contrôle les uns dans les autres.

---

## Exercice 2 — Directives d'Attribut

**1. Quelle est la différence entre [class.active]="condition" et [ngClass]="{'active': condition}" ?**
`[class.active]` est une liaison de classe unique qui ajoute/supprime une seule classe CSS. `[ngClass]` accepte un objet, un tableau ou une chaîne pour gérer plusieurs classes simultanément. Pour une seule classe, `[class.active]` est plus performant.

**2. Pourquoi ngStyle est-il préféré à [style.xxx] quand on veut modifier plusieurs propriétés CSS ?**
`[ngStyle]` permet de définir plusieurs propriétés CSS en une seule expression (objet clé-valeur). Avec `[style.xxx]`, il faudrait une liaison par propriété, ce qui alourdit le template.

**3. Comment faire en sorte qu'une classe soit appliquée uniquement sur les lignes paires ?**
En utilisant `$even` ou `$odd` dans le @for : `[ngClass]="{'ligne-paire': $even}"`.

---

## Exercice 3 — Directive Personnalisée

**1. Quelle est la différence entre @HostListener et (click) dans un template ?**
`@HostListener` écoute les événements sur l'élément hôte de la directive, directement depuis la classe de la directive. `(click)` est une liaison d'événement dans le template du composant. `@HostListener` est plus adapté pour une directive réutilisable car le comportement est encapsulé dans la directive.

**2. Pourquoi utiliser @HostBinding plutôt que el.nativeElement.style directement ?**
`@HostBinding` est déclaratif, plus lisible, et Angular gère automatiquement les changements de détection et le nettoyage. Manipuler `el.nativeElement.style` directement peut contourner le système de détection de changements d'Angular et causer des incohérences.

**3. Comment passer plusieurs paramètres à une directive via @Input() ?**
On déclare plusieurs propriétés avec `@Input()` dans la directive. Dans le template, on utilise la syntaxe de liaison : `<div appMaDirective [input1]="val1" [input2]="val2">`.

**4. Peut-on appliquer plusieurs directives sur le même élément HTML ?**
Oui, on peut appliquer plusieurs directives sur un même élément.

---

## Exercice 4 — Pipes

**1. Un pipe modifie-t-il la valeur originale dans le composant ? Pourquoi ?**
Non, un pipe ne modifie que l'affichage (côté template). La valeur originale dans le composant reste inchangée. C'est le principe de séparation entre données et présentation.

**2. Quelle est la différence entre un pipe pur et un pipe impure en Angular ?**
Un pipe pur ne s'exécute que lorsque la valeur d'entrée change (par défaut). Un pipe impure (`pure: false`) s'exécute à chaque cycle de détection de changement, ce qui peut dégrader les performances.

**3. Comment passer plusieurs paramètres à un pipe ? Donnez un exemple.**
En séparant les paramètres par des deux-points : `{{ valeur | monPipe:param1:param2 }}`. Dans la classe, `transform(valeur: string, param1: string, param2: number)`.

**4. Peut-on utiliser un pipe dans une condition @if ? Comment ?**
Oui : `@if ((contact.score | mention) === '✅ Passable') { ... }`.

---

## Exercice 5 — Services

**1. Pourquoi utilise-t-on private dans constructor(private contactService: ContactService) ?**
Le mot-clé `private` crée automatiquement une propriété de classe accessible uniquement dans le composant. Angular injecte le service via le constructeur, et `private` encapsule le service (ne l'expose pas dans le template).

**2. Que se passerait-il si on avait deux instances du ContactService ? Quel problème ?**
On perdrait la synchronisation des données : si un composant ajoute un contact dans son instance, les autres composants ne verraient pas le changement. On perd le principe de source de vérité unique (Single Source of Truth).

**3. Quelle est la différence entre providedIn: 'root' et providedIn: 'any' ?**
`providedIn: 'root'` crée un singleton dans toute l'application. `providedIn: 'any'` crée une instance par module lazy-loadé (une instance partagée dans un même injecteur). En pratique, `'root'` est le plus utilisé.

**4. Peut-on injecter un service dans un autre service ? Comment ?**
Oui, en utilisant le même mécanisme d'injection de dépendances dans le constructeur : `constructor(private autreService: AutreService) {}`. Le service doit être décoré avec `@Injectable`.
