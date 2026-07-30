import { Component, Input } from '@angular/core';
import { User } from '../model/user.model';

/**
 * Composant enfant chargé d'afficher un utilisateur.
 */
@Component({
  selector: 'app-user-card',
  template: `
    <article>
      <h3>{{ user.firstName }} {{ user.lastName }}</h3>
      <p>{{ user.email }}</p>
    </article>
  `,
})
export class UserCardComponent {
  /**
   * @Input() reçoit des données depuis le composant parent.
   * Exemple:
   * <app-user-card [user]="user"></app-user-card>
   * Le parent passe l'objet user au composant enfant.
   */
  @Input() user!: User;
}
