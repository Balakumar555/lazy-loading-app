import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  modules = [
    {
      name: 'Customers',
      description: 'Manage customer information, contacts, and relationships',
      route: '/customers'
    },
    {
      name: 'Inventory',
      description: 'Track products, stock levels, and warehouse management',
      route: '/inventory'
    },
    {
      name: 'Orders',
      description: 'Process and manage customer orders and fulfillment',
      route: '/orders'
    },
    {
      name: 'Payments',
      description: 'Handle billing, payments, and financial transactions',
      route: '/payments'
    },
    {
      name: 'Sales',
      description: 'Track sales performance, reports, and analytics',
      route: '/sales'
    }
  ]

}
