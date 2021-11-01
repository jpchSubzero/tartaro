import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeHija1Component } from './home-hija1/home-hija1.component';
import { HomeHija2Component } from './home-hija2/home-hija2.component';
import { HomeHija3Component } from './home-hija3/home-hija3.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent 
  },
  {
    path: 'homehija1', 
    component: HomeHija1Component
  },
  {
    path: 'homehija2', 
    component: HomeHija2Component
  },
  {
    path: 'homehija3', 
    component: HomeHija3Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
