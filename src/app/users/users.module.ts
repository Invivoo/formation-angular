import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { CrudComponent } from './crud/crud.component';
import { UserCardComponent } from './user-card/user-card.component';

@NgModule({
  declarations: [CrudComponent, UserCardComponent],
  imports: [CommonModule, UsersRoutingModule]
})
export class UsersModule {}
