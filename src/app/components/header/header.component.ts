import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  faSearch,
  faUserCircle,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CategoryStoreItems } from '../../services/categories.storeItem';

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

  constructor(public categoryStore: CategoryStoreItems) {}
}
