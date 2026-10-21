import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login, title: 'Login' },
  { path: 'dashboard', component: Dashboard, title: 'Dashboard' },
  { path: '**', redirectTo: 'login' }
];