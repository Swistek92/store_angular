import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryStoreItems } from '../../services/categories.storeItem';
@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent {
  constructor(public cateogryStore: CategoryStoreItems) {}
}
