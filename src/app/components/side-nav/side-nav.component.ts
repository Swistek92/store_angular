import { Component, EventEmitter, Output } from '@angular/core';
import { Category } from '../../types/category.type';
import { CommonModule } from '@angular/common';
import { OnDestroy } from '@angular/core';
import { CategoryStoreItems } from '../../services/category/categories.storeItem';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenavigation',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class SidenavigationComponent implements OnDestroy {
  @Output()
  subCategoryCliked: EventEmitter<number> = new EventEmitter<number>();
  categories: Category[] = [];
  subscriptions: Subscription = new Subscription();

  constructor(categoriesStoreItems: CategoryStoreItems) {
    this.subscriptions.add(
      categoriesStoreItems.categories$.subscribe((e) => {
        this.categories = e;
      })
    );
  }

  getCategories(parentCategoryId?: number): Category[] {
    return this.categories.filter((category) => {
      return parentCategoryId
        ? category.parent_category_id === parentCategoryId
        : category.parent_category_id === null;
    });
  }
  onSubCategoryClick(subCategory: Category): void {
    this.subCategoryCliked.emit(subCategory.id);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
