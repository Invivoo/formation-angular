import { Component, OnInit } from '@angular/core';

import { UserModel } from '../model/user.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-crud',
  standalone: false,
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  userList: UserModel[] = [];
  isLoading = false;
  errorMessage = '';

  constructor(private readonly usersService: UsersService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  private loadUsers(): void {
    this.isLoading = true;
    this.usersService.getUsers().subscribe({
      next: (response) => {
        this.userList = response;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Unable to load users. Please verify backend API availability.';
        this.isLoading = false;
      }
    });
  }
}
