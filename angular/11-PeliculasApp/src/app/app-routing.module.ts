import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';

const ROUTES: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'busqueda/:text',
    component: BusquedaComponent
  },
  {
    path: 'pelicula/:id',
    component: PeliculaComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/home'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES, { useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
