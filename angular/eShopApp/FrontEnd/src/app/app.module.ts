import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UtilsModule } from 'factor-utils';
import { environment } from 'src/environments/environment';

import { JwtModule } from "@auth0/angular-jwt";
import { HomeComponent } from './pages/home/home.component';
import { FeaturedGridComponent } from './components/featured-grid/featured-grid.component';
import { ProductNamePipe } from './pipes/product-name.pipe';
import { ProductComponent } from './pages/product/product.component';
import { CartComponent } from './pages/cart/cart.component';
import { SearchComponent } from './pages/search/search.component';
import { ProductAdminComponent } from './pages/product-admin/product-admin.component';
import { CategoryAdminComponent } from './pages/category-admin/category-admin.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FeaturedGridComponent,
    ProductNamePipe,
    ProductComponent,
    CartComponent,
    SearchComponent,
    ProductAdminComponent,
    CategoryAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    UtilsModule.forRoot({
      storage: { encryptionSecret: environment.cypherPattern } //PARA LA ENCRIPTACION DEL LOCAL STORAGE USANDO EL SERVICIO 'STORAGE-SERVICE'
    }),
    JwtModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
