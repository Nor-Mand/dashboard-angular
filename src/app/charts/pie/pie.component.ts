import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css'],
})
export class PieComponent {
  @Input() results;
  @Input() name;

  // view: any[];
  view: any[] = [600, 400];
  width: number = 700;
  height: number = 300;
  fitContainer: boolean = false;

  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient: boolean = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Sales';
  timeline = true;
  doughnut = true;
  colorScheme = {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB'],
  };
  //pie
  showLabels = true;
}
