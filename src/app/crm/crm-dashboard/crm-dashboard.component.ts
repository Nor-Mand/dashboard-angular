import { Component } from '@angular/core';

@Component({
  selector: 'app-crm-dashboard',
  templateUrl: './crm-dashboard.component.html',
  styleUrls: ['./crm-dashboard.component.css'],
})
export class CrmDashboardComponent {
  name = 'Sales Forecast';
  // data goes here
  single = [
    {
      name: 'China',
      value: 2243772,
    },
    {
      name: 'USA',
      value: 1126000,
    },
    {
      name: 'Norway',
      value: 296215,
    },
    {
      name: 'Japan',
      value: 257363,
    },
    {
      name: 'Germany',
      value: 196750,
    },
    {
      name: 'France',
      value: 204617,
    },
  ];
}
