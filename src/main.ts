import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, Routes } from '@angular/router';

import { AppComponent } from './app/app.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'users/all' },
  {
    path: 'users',
    loadChildren: () => import('./app/users/users.module').then((m) => m.UsersModule),
  },
  { path: '**', redirectTo: 'users/all' },
];

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(), provideRouter(routes)],
}).catch((error: unknown) => console.error(error));
