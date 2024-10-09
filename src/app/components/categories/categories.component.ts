import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryStoreItems } from '../../services/category/categories.storeItem';
import { Category } from '../../types/category.type';
@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent {
  @Output()
  cateogryClicked: EventEmitter<number> = new EventEmitter<number>();
  constructor(public cateogryStore: CategoryStoreItems) {}

  categoryClicked(cateogry: Category): void {
    this.cateogryClicked.emit(cateogry.id);
  }
}
