import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutes { }


export const customersRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./inventory/inventory.component').then(c => c.InventoryComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./product-list/product-list.component').then(c => c.ProductListComponent)
      }
    ]
  }
];
