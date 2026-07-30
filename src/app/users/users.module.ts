import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UsersRoutingModule } from './users-routing.module';
import { CrudComponent } from './crud/crud.component';
import { UserCardComponent } from './user-card/user-card.component';

/**
 * @NgModule regroupe les éléments liés à une fonctionnalité.
 * imports:
 * - modules dont ce module a besoin (directives Angular, HTTP, routing local).
 * declarations:
 * - composants appartenant à ce module.
 * providers:
 * - services créés pour ce module (vide ici car UsersService est fourni en root).
 */
@NgModule({
  imports: [CommonModule, HttpClientModule, UsersRoutingModule],
  declarations: [CrudComponent, UserCardComponent],
  providers: [],
})
export class UsersModule {}
