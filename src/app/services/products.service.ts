import { Injectable } from '@angular/core';
import { ProductListItem } from '../types/products.type';
import { products } from '../data/products.data';

@Injectable()
export class ProductsService {
  getProductsList(): ProductListItem[] {
    return products;
  }
}
