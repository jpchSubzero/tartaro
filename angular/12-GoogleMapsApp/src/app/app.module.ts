import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MapaComponent } from './components/mapa/mapa.component';

//Google Maps
import { AgmCoreModule } from '@agm/core';
import { MapaEditarComponent } from './components/mapa-editar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MapaComponent,
    MapaEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCDWnmvyzYxO4emawDfArfU8JlXS19k4fk'
    })    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
