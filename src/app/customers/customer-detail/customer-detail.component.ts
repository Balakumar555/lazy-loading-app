import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-customer-detail',
  imports: [CommonModule, RouterModule],
  templateUrl: './customer-detail.component.html',
  styleUrl: './customer-detail.component.css'
})
export class CustomerDetailComponent implements OnInit {

 customer: any;
  
  private customers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '555-0123', address: '123 Main St', company: 'Acme Corp' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '555-0456', address: '456 Oak Ave', company: 'Tech Solutions' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', phone: '555-0789', address: '789 Pine Rd', company: 'Innovation Inc' }
  ];
  
  constructor(private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.customer = this.customers.find(c => c.id === id);
  }
}