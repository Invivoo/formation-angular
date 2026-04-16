import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserModel } from '../model/user.model';

const BASE_URL = 'http://localhost:8081/api/v1/employees';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private readonly http: HttpClient) {}

  getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(BASE_URL);
  }

  create(data: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(BASE_URL, data);
  }

  update(id: number, data: Partial<UserModel>): Observable<UserModel> {
    return this.http.put<UserModel>(`${BASE_URL}/${id}`, data);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${BASE_URL}/${id}`);
  }

  findByEmail(email: string): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${BASE_URL}?email=${encodeURIComponent(email)}`);
  }
}
