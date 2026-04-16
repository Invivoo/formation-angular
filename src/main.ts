import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';

/**
 * Routes principales de l'application.
 * - '' affiche la page racine (AppComponent).
 * - 'users' charge le module utilisateurs de façon paresseuse (lazy loading)
 *   pour éviter de charger tout le code dès le démarrage.
 */
const routes: Routes = [
  { path: '', component: AppComponent },
  {
    path: 'users',
    loadChildren: () =>
      import('./app/users/users.module').then((m) => m.UsersModule),
  },
];

/**
 * Point d'entrée de l'application Angular.
 * bootstrapApplication:
 * - démarre l'application avec un composant racine standalone.
 * providers:
 * - enregistre des services globaux de l'application.
 * provideRouter(routes):
 * - active la navigation Angular et injecte la configuration des routes.
 */
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch((err) => console.error(err));
