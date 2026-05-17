/* ============================================================
   EXERCICE 1 — Interface Contact
   Définit la structure de données pour un contact
   ============================================================ */
export interface Contact {
  nom: string;
  email: string;
  actif: boolean;
  score: number;   // 0-20
  role: 'admin' | 'user' | 'guest';
}
