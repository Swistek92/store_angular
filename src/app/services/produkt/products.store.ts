import { StoreItem } from '../../shared/storeItem';
import { Product } from '../../types/products.type';
import { ProductsService } from './products.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ProduktsStoreItems extends StoreItem<Product[]> {
  constructor(private productSerivce: ProductsService) {
    super([]);
  }
  async loadProducts(query?: string) {
    this.productSerivce.getAllProducts(query).subscribe((prod) => {
      this.setValue(prod);
    });
  }

  get getProducts$(): Observable<Product[]> {
    return this.value$;
  }
}
