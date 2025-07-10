import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-inventory',
  imports: [CommonModule, RouterModule],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
     console.log('Inventory module loaded!');
  } 

}
