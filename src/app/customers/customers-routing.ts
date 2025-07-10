// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class CustomersRoutingModule { }
import { Routes } from '@angular/router';

export const customersRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./customers/customers.component').then(c => c.CustomersComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./customer-list/customer-list.component').then(c => c.CustomerListComponent)
      },
      {
        path: 'detail/:id',
        loadComponent: () => import('./customer-detail/customer-detail.component').then(c => c.CustomerDetailComponent)
      }
    ]
  }
];