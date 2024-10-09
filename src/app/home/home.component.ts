import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { CategoriesComponent } from '../components/categories/categories.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidenavigationComponent } from '../components/side-nav/side-nav.component';
import { ProductsComponent } from '../components/products/products.component';
import { SharedModule } from '../shared/shared.module';
import { CategoryStoreItems } from '../services/category/categories.storeItem';
import { ProduktsStoreItems } from '../services/produkt/products.store';
import { ProductsService } from '../services/produkt/products.service';
import { SearchKeyword } from '../types/seachKeyword.type';
import { HomeRoutingModule } from './home-routing.module';

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
    HomeRoutingModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [CategoryStoreItems, ProduktsStoreItems, ProductsService],
})
export class HomeComponent {
  constructor(
    private categoryStoreItems: CategoryStoreItems,
    private productStoreItems: ProduktsStoreItems
  ) {
    this.categoryStoreItems.loadCategories();
    this.productStoreItems.loadProducts();
  }

  onSelectSubCategory(subCateogryId: number): void {
    this.productStoreItems.loadProducts('subcategoryid=' + subCateogryId);
  }
  onSelectCategory(cateogryId: number): void {
    this.productStoreItems.loadProducts('maincategoryid=' + cateogryId);
    console.log(cateogryId);
  }
  onSearchKeyword(searchKeyword: SearchKeyword): void {
    console.log('searchKeyword home' + JSON.stringify(searchKeyword));
    this.productStoreItems.loadProducts(
      'maincategoryid=' +
        searchKeyword.categoryId +
        '&keyword=' +
        searchKeyword.keyword
    );
  }
}
