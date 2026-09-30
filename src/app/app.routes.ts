import { Routes } from '@angular/router';

export const routes: Routes = [
     {
    path: '',
    loadComponent: () =>
      import('./features/landing/landing.page.component').then((m) => m.LandingPage),
    title: 'AI Product Investigator — Investigate before you buy',
  },
  {
    path: 'auth/login',
    loadComponent: () => import('./features/auth/login/login.page.component').then((m) => m.LoginPageComponent),
    title: 'Log in — Investigator',
  },
  {
    path: 'auth/register',
    loadComponent: () => import('./features/auth/register/register.page.component').then((m) => m.RegisterPageComponent),
    title: 'Create account — Investigator',
  },
  {
    path: 'app',
    loadComponent: () => import('./layout/main-layout/main-layout.component').then((m) => m.MainLayout),
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard.page.component').then((m) => m.DashboardPageComponent),
        title: 'Dashboard — Investigator',
      },
      {
        path: 'investigate',
        loadComponent: () => import('./shared/components/coming-soon.component').then((m) => m.ComingSoonComponent),
        title: 'Investigate — Investigator',
      },
      {
        path: 'investigations',
        loadComponent: () => import('./shared/components/coming-soon.component').then((m) => m.ComingSoonComponent),
        title: 'Investigations — Investigator',
      },
      {
        path: 'saved',
        loadComponent: () => import('./shared/components/coming-soon.component').then((m) => m.ComingSoonComponent),
        title: 'Saved — Investigator',
      },
      {
        path: 'profile',
        loadComponent: () => import('./shared/components/coming-soon.component').then((m) => m.ComingSoonComponent),
        title: 'Profile — Investigator',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
