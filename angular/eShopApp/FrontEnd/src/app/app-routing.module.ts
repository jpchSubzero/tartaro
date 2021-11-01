import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductAdminComponent } from './pages/product-admin/product-admin.component';
import { ProductComponent } from './pages/product/product.component';
import { SearchComponent } from './pages/search/search.component';
import { CategoryAdminComponent } from './pages/category-admin/category-admin.component';
import { GuardAdminGuard } from './guards/guard-admin.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'product/:id', component: ProductComponent},
  { path: 'shoppingcart', component: CartComponent},
  { path: 'search/:criteria', component: SearchComponent},

  { path: 'productAdmin', component: ProductAdminComponent, canActivate: [GuardAdminGuard] },
  { path: 'categoryAdmin', component: CategoryAdminComponent, canActivate: [GuardAdminGuard] },

  { path: '**', pathMatch: 'full', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
