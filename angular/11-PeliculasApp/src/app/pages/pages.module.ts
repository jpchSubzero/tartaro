import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';
import { RatingModule } from 'ng-starrating';
import { CastSlideshowComponent } from '../components/cast-slideshow/cast-slideshow.component';



@NgModule({
  declarations: [
    HomeComponent,
    PeliculaComponent,
    BusquedaComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PipesModule,
    RatingModule,
  ]
})
export class PagesModule { }