import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserModel } from '../model/user.model';

const baseUrl = 'http://localhost:8081/api/v1/employees';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private readonly http: HttpClient) {}

  getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(baseUrl);
  }

  create(data: Partial<UserModel>): Observable<UserModel> {
    return this.http.post<UserModel>(baseUrl, data);
  }

  update(id: number, data: Partial<UserModel>): Observable<UserModel> {
    return this.http.put<UserModel>(`${baseUrl}/${id}`, data);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${baseUrl}/${id}`);
  }

  findByEmail(email: string): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${baseUrl}?email=${encodeURIComponent(email)}`);
  }
}
