import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { CategoriesComponent } from '../components/categories/categories.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidenavigationComponent } from '../components/side-nav/side-nav.component';
import { ProductsComponent } from '../components/products/products.component';
import { SharedModule } from '../shared/shared.module';
import { CategoryStoreItems } from '../services/categories.storeItem';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FontAwesomeModule,
    CategoriesComponent,
    SidenavigationComponent,
    ProductsComponent,
    SharedModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [CategoryStoreItems],
})
export class HomeComponent {
  constructor(private categoryStoreItems: CategoryStoreItems) {
    this.categoryStoreItems.loadCategories();
  }
}
