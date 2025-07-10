import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent implements OnInit {

 customers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '555-0123' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '555-0456' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', phone: '555-0789' }
  ];
  
  ngOnInit(): void {
    console.log('Customer list loaded!');
  }
}
