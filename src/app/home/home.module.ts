import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { CategoryService } from '../services/category/category.service';
import { CategoryStoreItems } from '../services/category/categories.storeItem';
import { ProduktsStoreItems } from '../services/produkt/products.store';
import { ProductsService } from '../services/produkt/products.service';
import { HomeComponent } from './home.component';
import { ProductsComponent } from '../components/products/products.component';

@NgModule({
  declarations: [], // Declare your components here
  imports: [
    // HomeComponent,
    // CommonModule,
    HomeRoutingModule, // Import routing module for child routing
  ],
  providers: [
    CategoryService,
    CategoryStoreItems,
    ProductsService,
    ProduktsStoreItems,
  ],
})
export class HomeModule {}
