import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  faSearch,
  faUserCircle,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CategoryStoreItems } from '../../services/category/categories.storeItem';
import { SearchKeyword } from '../../types/seachKeyword.type';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  faSearch = faSearch;
  faUserCircle = faUserCircle;

  @Output()
  searchClicked: EventEmitter<SearchKeyword> =
    new EventEmitter<SearchKeyword>();

  constructor(public categoryStore: CategoryStoreItems) {}

  onSubmitSearch(keyword: string, categoryId: string, e: Event): void {
    e.preventDefault();

    console.log('keyword:' + keyword + '       cat id' + categoryId);
    this.searchClicked.emit({
      categoryId: parseInt(categoryId),
      keyword,
    });
  }
}
