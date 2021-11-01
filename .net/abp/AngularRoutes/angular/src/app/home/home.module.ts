import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeHija1Component } from './home-hija1/home-hija1.component';
import { HomeHija2Component } from './home-hija2/home-hija2.component';
import { HomeHija3Component } from './home-hija3/home-hija3.component';

@NgModule({
  declarations: [HomeComponent, HomeHija1Component, HomeHija2Component, HomeHija3Component],
  imports: [SharedModule, HomeRoutingModule],
})
export class HomeModule {}
