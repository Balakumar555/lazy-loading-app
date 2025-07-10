import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)},
    // Make sure the path matches the actual file location and name (e.g., 'customer.component' or 'customers/customers.component.ts')
    {path:'customers',  loadChildren: () => import('./customers/customers-routing').then(r => r.customersRoutes)},
];
