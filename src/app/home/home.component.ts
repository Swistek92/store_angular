import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { CategoriesComponent } from '../components/categories/categories.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidenavigationComponent } from '../components/side-nav/side-nav.component';
import { ProductsComponent } from '../components/products/products.component';
import { SharedModule } from '../shared/shared.module';

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
})
export class HomeComponent {}
