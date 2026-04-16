import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserModel } from '../model/user.model';

const EMPLOYEES_API_URL = 'http://localhost:8081/api/v1/employees';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private readonly http: HttpClient) {}

  getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(EMPLOYEES_API_URL);
  }

  create(data: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(EMPLOYEES_API_URL, data);
  }

  update(id: number, data: Partial<UserModel>): Observable<UserModel> {
    return this.http.put<UserModel>(`${EMPLOYEES_API_URL}/${id}`, data);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${EMPLOYEES_API_URL}/${id}`);
  }

  findByEmail(email: string): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${EMPLOYEES_API_URL}?email=${encodeURIComponent(email)}`);
  }
}
