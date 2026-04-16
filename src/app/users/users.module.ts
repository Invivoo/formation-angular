import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CrudComponent } from './crud/crud.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [CrudComponent, UserCardComponent],
  imports: [CommonModule, UsersRoutingModule],
})
export class UsersModule {}
