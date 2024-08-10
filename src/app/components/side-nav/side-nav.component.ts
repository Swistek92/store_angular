import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../types/category.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidenavigation',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class SidenavigationComponent {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) {
    this.categories = this.categoryService.getAllCategories();
    console.log(this.categories);
  }

  getCategories(parentCategoryId?: number): Category[] {
    return this.categories.filter(
      (category) => category.parent_category_id === parentCategoryId
    );
  }
}
