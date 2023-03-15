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
      icon: 'stacked_line_chart',
    },
    {
      name: 'Orders',
      percentage: 3.24,
      total: 36894,
      icon: 'receipt',
    },
    {
      name: 'Customers',
      percentage: 29.24,
      total: 18325,
      icon: 'diversity_3',
    },
    {
      name: 'My Balance',
      percentage: 0,
      total: 16579,
      icon: 'balance',
    },
  ];

  // data goes here
  forecast = [
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
  areaForecast = [
    {
      name: 'Turkmenistan',
      series: [
        {
          value: 2926,
          name: '2016-09-21T12:38:41.800Z',
        },
        {
          value: 4754,
          name: '2016-09-20T03:35:07.492Z',
        },
        {
          value: 6507,
          name: '2016-09-17T05:24:44.183Z',
        },
        {
          value: 6744,
          name: '2016-09-17T20:10:14.731Z',
        },
        {
          value: 2996,
          name: '2016-09-22T09:42:25.796Z',
        },
      ],
    },
    {
      name: 'Djibouti',
      series: [
        {
          value: 6865,
          name: '2016-09-21T12:38:41.800Z',
        },
        {
          value: 5951,
          name: '2016-09-20T03:35:07.492Z',
        },
        {
          value: 6566,
          name: '2016-09-17T05:24:44.183Z',
        },
        {
          value: 5467,
          name: '2016-09-17T20:10:14.731Z',
        },
        {
          value: 2376,
          name: '2016-09-22T09:42:25.796Z',
        },
      ],
    },
    {
      name: 'Switzerland',
      series: [
        {
          value: 6522,
          name: '2016-09-21T12:38:41.800Z',
        },
        {
          value: 3909,
          name: '2016-09-20T03:35:07.492Z',
        },
        {
          value: 6803,
          name: '2016-09-17T05:24:44.183Z',
        },
        {
          value: 3239,
          name: '2016-09-17T20:10:14.731Z',
        },
        {
          value: 2565,
          name: '2016-09-22T09:42:25.796Z',
        },
      ],
    },
    {
      name: 'Åland Islands',
      series: [
        {
          value: 6018,
          name: '2016-09-21T12:38:41.800Z',
        },
        {
          value: 2649,
          name: '2016-09-20T03:35:07.492Z',
        },
        {
          value: 5636,
          name: '2016-09-17T05:24:44.183Z',
        },
        {
          value: 3685,
          name: '2016-09-17T20:10:14.731Z',
        },
        {
          value: 4767,
          name: '2016-09-22T09:42:25.796Z',
        },
      ],
    },
    {
      name: 'Viet Nam',
      series: [
        {
          value: 3786,
          name: '2016-09-21T12:38:41.800Z',
        },
        {
          value: 5472,
          name: '2016-09-20T03:35:07.492Z',
        },
        {
          value: 3003,
          name: '2016-09-17T05:24:44.183Z',
        },
        {
          value: 3758,
          name: '2016-09-17T20:10:14.731Z',
        },
        {
          value: 3833,
          name: '2016-09-22T09:42:25.796Z',
        },
      ],
    },
  ];
}
