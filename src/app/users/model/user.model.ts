/**
 * Interface décrivant la forme d'un utilisateur.
 * Une interface TypeScript permet de typer les données manipulées
 * pour éviter des erreurs et faciliter l'autocomplétion.
 */
export interface User {
  /** Identifiant unique de l'utilisateur côté API/base de données */
  id: number;
  /** Prénom affiché dans l'interface */
  firstName: string;
  /** Nom de famille affiché dans l'interface */
  lastName: string;
  /** Adresse e-mail utilisée pour contacter ou rechercher l'utilisateur */
  email: string;
}
