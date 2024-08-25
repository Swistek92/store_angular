import { Component } from '@angular/core';
import { ProductListItem } from '../../types/products.type';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  providers: [ProductsService],
})
export class ProductsComponent {
  products: ProductListItem[] = [];

  constructor(productsService: ProductsService) {
    this.products = productsService.getProductsList();
  }
}
