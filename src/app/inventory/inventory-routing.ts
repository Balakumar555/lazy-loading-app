import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
export const inventoryRoutes: Routes = [
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
