import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../model/user.model';

/**
 * Composant de liste CRUD.
 * @Component configure:
 * - selector: balise utilisable dans d'autres templates.
 * - template: vue HTML inline de ce composant.
 */
@Component({
  selector: 'app-crud',
  template: `
    <h2>Liste des utilisateurs</h2>
    <app-user-card *ngFor="let user of userList" [user]="user"></app-user-card>
  `,
})
export class CrudComponent implements OnInit {
  /** Tableau alimenté avec les données de l'API */
  userList: User[] = [];

  /**
   * Injection de dépendances:
   * Angular fournit automatiquement une instance de UsersService.
   */
  constructor(private usersService: UsersService) {}

  /**
   * Hook de cycle de vie exécuté après la création du composant.
   * On y déclenche l'initialisation métier (chargement de la liste).
   */
  ngOnInit(): void {
    this.loadUsers();
  }

  /**
   * Récupère les utilisateurs via le service.
   * subscribe(...) consomme l'Observable et met à jour l'état local.
   */
  private loadUsers(): void {
    this.usersService.getUsers().subscribe((users) => {
      this.userList = users;
    });
  }
}
