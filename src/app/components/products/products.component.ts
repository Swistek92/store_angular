import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ProduktsStoreItems } from '../../services/produkt/products.store';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, SharedModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  constructor(public productsStore: ProduktsStoreItems) {
    console.log(productsStore);
  }
}
