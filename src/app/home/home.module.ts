import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../services/category.service';
import { CategoryStoreItems } from '../services/categories.storeItem';
@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [CategoryService, CategoryStoreItems],
})
export class HomeModule {}
