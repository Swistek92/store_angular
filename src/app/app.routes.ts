import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component'; // Import nowego komponentu
import { HomeModule } from './home/home.module';
export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  // },
  { path: 'product-details/:id', component: ProductDetailsComponent }, // Ścieżka do detali produktu
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];
