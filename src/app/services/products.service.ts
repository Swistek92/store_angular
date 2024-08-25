import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class ProductsService {
  constructor(private httpClient: HttpClient) {}
}
