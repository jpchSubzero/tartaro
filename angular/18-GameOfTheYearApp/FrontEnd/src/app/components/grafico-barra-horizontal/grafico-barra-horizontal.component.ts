import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single } from './data';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent implements OnInit, OnDestroy {

  @Input()
  results: any[] = [];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';
  legendTitle = 'Leyenda';

  colorScheme = 'nightLights';

  intervalo:any = undefined!;

  constructor() {
    // this.results = single;  
    // this.intervalo = setInterval(() => {
    //   console.log('tick');
    //   const newResults = [...this.results];
  
    //   for (let i in newResults) {
    //     newResults[i].value = Math.round(Math.random() * 500);
    //   }
    //   this.results = newResults;  
    // }, 1500);
  }
  ngOnDestroy(): void {
    // clearInterval(this.intervalo);
  }

  onSelect(event:any) {
    console.log(event);
  }

  ngOnInit(): void {  }

}
