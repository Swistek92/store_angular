import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../types/products.type';
import { apiQuery } from '../../config/api.config';
@Injectable()
export class ProductsService {
  constructor(private httpClient: HttpClient) {}
  getAllProducts(query?: string): Observable<Product[]> {
    let url: string = apiQuery.products;
    if (query) {
      url += '?' + query;
    }
    return this.httpClient.get<Product[]>(url);
  }
  // Przykład: pobieranie produktu po ID
  getProductById(id: number): Observable<Product> {
    const url = `${apiQuery.products}/${id}`;
    return this.httpClient.get<Product>(url);
  }
}
