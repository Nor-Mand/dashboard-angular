import { Component } from '@angular/core';

@Component({
  selector: 'app-crm-dashboard',
  templateUrl: './crm-dashboard.component.html',
  styleUrls: ['./crm-dashboard.component.css'],
})
export class CrmDashboardComponent {
  name = 'Sales Forecast';

  summary = [
    {
      name: 'Total Earnings',
      percentage: 16.24,
      total: 559.25,
      icon: 'earning',
    },
    {
      name: 'Orders',
      percentage: 3.24,
      total: 36894,
      icon: 'orders',
    },
    {
      name: 'Customers',
      percentage: 29.24,
      total: 18325,
      icon: 'customers',
    },
    {
      name: 'My Balance',
      percentage: 0,
      total: 16579,
      icon: 'balance',
    },
  ];

  // data goes here
  forcast = [
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
