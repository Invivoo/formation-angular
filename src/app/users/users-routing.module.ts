import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';

/**
 * Configuration des routes internes au module users.
 * - 'all' affiche la liste des utilisateurs.
 * - 'create' pourrait afficher un formulaire de création
 *   (ici, on réutilise CrudComponent pour garder l'exemple simple).
 */
const routes: Routes = [
  { path: 'all', component: CrudComponent },
  { path: 'create', component: CrudComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
