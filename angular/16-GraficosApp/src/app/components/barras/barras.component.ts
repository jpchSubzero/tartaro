import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styleUrls: ['./barras.component.css']
})
export class BarrasComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = [
    'Pichincha','Guayas','Manabí','Azuay','El Oro','Loja','Imbabura','Tungurahua','Los Ríos','Santo Domingo de los Tsáchilas','Cotopaxi','Provincia de Esmeraldas','Carchi','Chimborazo','Bolívar','Morona-Santiago','Cañar','Sucumbíos','Santa Elena','Napo','Orellana'
  ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [159000,62038,31658,24314,21223,16797,14596,14038,12492,11460,11375,8595,8364,8265,6661,5931,5846,5351,4375,3421,3366], label: 'Casos' },
    { data: [3138,2712,2507,505,1083,556,408,572,487,690,576,385,275,523,111,58,137,173,421,107,93], label: 'Muertes' }
  ];


  constructor() { }

  ngOnInit(): void {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40 ];
  }

}
