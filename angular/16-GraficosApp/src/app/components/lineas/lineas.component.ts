import { Component, } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-lineas',
  templateUrl: './lineas.component.html',
  styleUrls: ['./lineas.component.css']
})

export class LineasComponent {

  lineChartData: ChartDataSets[] = [
    { data: [159000,62038,31658,24314,21223,16797,14596,14038,12492,11460,11375,8595,8364,8265,6661,5931,5846,5351,4375,3421,3366], label: 'Casos' },
    { data: [3138,2712,2507,505,1083,556,408,572,487,690,576,385,275,523,111,58,137,173,421,107,93], label: 'Muertes', yAxisID: 'y-axis-1' }
  ];

  lineChartLabels: Label[] = ['Pichincha','Guayas','Manabí','Azuay','El Oro','Loja','Imbabura','Tungurahua','Los Ríos','Santo Domingo de los Tsáchilas','Cotopaxi','Provincia de Esmeraldas','Carchi','Chimborazo','Bolívar','Morona-Santiago','Cañar','Sucumbíos','Santa Elena','Napo','Orellana'];

  lineChartOptions = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            fontColor: 'red',
          }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },    
  };

  public lineChartColors: Color[] = [
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType: ChartType = 'line';

  public chartClicked(event:any): void {
    console.log(event);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }  
}