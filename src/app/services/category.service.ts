import { Injectable } from '@angular/core';
import { Category } from '../types/category.type';
// import { Category } from '../types/category.type';

import { categories } from '../data/categories.data';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor() {}

  getAllCategories(): Category[] {
    return categories;
  }
}
