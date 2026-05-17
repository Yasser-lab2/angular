# TP3 Angular 20 — Directives, Pipes & Services

## Structure du projet et correspondance avec les exercices

```
src/app/
├── contact.interface.ts                        ← EXERCICE 1 (Partie A)
├── liste-contacts/
│   ├── liste-contacts.component.ts             ← EXERCICE 1 + 2 + 4 + 5
│   ├── liste-contacts.component.html           ← EXERCICE 1 + 2 + 4
│   └── liste-contacts.component.css            ← EXERCICE 2 (Partie A)
├── stats-contacts/
│   ├── stats-contacts.component.ts             ← EXERCICE 2 (Partie B) + 5
│   └── stats-contacts.component.html           ← EXERCICE 2 (Partie B)
├── survol.directive.ts                         ← EXERCICE 3 (Partie A)
├── highlight.directive.ts                      ← EXERCICE 3 (Partie B)
├── initiales.pipe.ts                           ← EXERCICE 4 (Partie B)
├── mention.pipe.ts                             ← EXERCICE 4 (Partie C)
├── contact.service.ts                          ← EXERCICE 5
├── formulaire-contact/
│   └── formulaire-contact.component.ts         ← EXERCICE 6
└── app.component.ts                            ← EXERCICE 6

src/styles.css                                  ← EXERCICE 3 (CSS @HostBinding)
REPONSES-QUESTIONS.md                           ← Questions de compréhension
```

## Contenu des exercices

| Exercice | Sujet | Fichiers principaux |
|---|---|---|
| 1 | Directives Structurelles (@if, @for, @switch) | `contact.interface.ts`, `liste-contacts/*` |
| 2 | Directives d'Attribut (ngClass, ngStyle) | `liste-contacts/*.css/.html`, `stats-contacts/*` |
| 3 | Directives Personnalisées (@Directive) | `survol.directive.ts`, `highlight.directive.ts` |
| 4 | Pipes Built-in & Personnalisés | `initiales.pipe.ts`, `mention.pipe.ts`, templates |
| 5 | Services & Injection de Dépendances | `contact.service.ts` |
| 6 | Application Complète | `app.component.ts`, `formulaire-contact/*` |

## Lancement

```bash
cd gestion-contacts-s3
npm install
ng serve
```

Puis ouvrir http://localhost:4200
