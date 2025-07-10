import { Component , OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

   products = [
    { name: 'Laptop', sku: 'LAP001', stock: 25, price: 999.99 },
    { name: 'Mouse', sku: 'MOU001', stock: 8, price: 29.99 },
    { name: 'Keyboard', sku: 'KEY001', stock: 15, price: 79.99 },
    { name: 'Monitor', sku: 'MON001', stock: 5, price: 299.99 }
  ];
  
  constructor() { }
  
  ngOnInit(): void {
    console.log('Product list loaded!');
  }
}