import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

/**
 * URL de base de l'API REST des utilisateurs.
 * Toutes les opérations CRUD partent de cette route.
 */
const baseUrl = 'http://localhost:8081/api/v1/employees';

/**
 * @Injectable permet à Angular d'instancier ce service via l'injection
 * de dépendances. providedIn: 'root' signifie "singleton global".
 */
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  /**
   * HttpClient est injecté automatiquement par Angular.
   * Il sert à faire les requêtes HTTP (GET, POST, PUT, DELETE).
   */
  constructor(private http: HttpClient) {}

  /**
   * Lit tous les utilisateurs.
   * Retourne un Observable<User[]>:
   * - un Observable représente un flux asynchrone de données.
   * - le composant s'abonne (subscribe) pour recevoir la réponse.
   */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(baseUrl);
  }

  /** Crée un nouvel utilisateur côté API. */
  create(data: Partial<User>): Observable<User> {
    return this.http.post<User>(baseUrl, data);
  }

  /** Met à jour un utilisateur existant via son id. */
  update(id: number, data: Partial<User>): Observable<User> {
    return this.http.put<User>(`${baseUrl}/${id}`, data);
  }

  /** Supprime un utilisateur via son id. */
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${baseUrl}/${id}`);
  }

  /** Recherche des utilisateurs par adresse e-mail. */
  findByEmail(email: string): Observable<User[]> {
    const params = new HttpParams().set('email', email);
    return this.http.get<User[]>(baseUrl, { params });
  }
}
