import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegistroComponent } from './pages/registro/registro.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { UtilsModule } from 'factor-utils';


@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    UtilsModule.forRoot({
      storage: { encryptionSecret: 'clave-de-encriptacion' } //PARA LA ENCRIPTACION DEL LOCAL STORAGE USANDO EL SERVICIO 'STORAGE-SERVICE'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
