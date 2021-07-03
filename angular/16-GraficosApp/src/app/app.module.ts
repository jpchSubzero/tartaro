import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { LineasComponent } from './components/lineas/lineas.component';
import { BarrasComponent } from './components/barras/barras.component';
import { DonasComponent } from './components/donas/donas.component';
import { RadarComponent } from './components/radar/radar.component';
import { PieComponent } from './components/pie/pie.component';

@NgModule({
  declarations: [
    AppComponent,
    LineasComponent,
    BarrasComponent,
    DonasComponent,
    RadarComponent,
    PieComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
