import { Component } from '@angular/core';

@Component({
  selector: 'app-e-dashboard',
  templateUrl: './e-dashboard.component.html',
  styleUrls: ['./e-dashboard.component.css'],
})
export class EDashboardComponent {
  name = 'Revenue';

  ecommerce = [
    {
      name: 'Bolivia',
      value: 1126000,
    },
    {
      name: 'Brazil',
      value: 196750,
    },
    {
      name: 'Chile',
      value: 296215,
    },
    {
      name: 'Paraguay',
      value: 257363,
    },
    {
      name: 'Venezuela',
      value: 2243772,
    },
    {
      name: 'Peru',
      value: 204617,
    },
  ];
}
