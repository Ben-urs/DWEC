import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsList } from './pages/products-list/products-list';
import { ProductsForm } from './pages/products-form/products-form';
import { CartPage } from './pages/cart-page/cart-page';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'productos', component: ProductsList },
  { path: 'nuevoproducto', component: ProductsForm },
  { path: 'producto/:_id', component: ProductsForm },
  { path: 'carrito', component: CartPage },
  { path: '**', redirectTo: 'home' },
];
