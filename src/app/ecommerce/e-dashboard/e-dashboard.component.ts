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

  forecast = [
    {
      name: 'Germany',
      series: [
        {
          name: '2010',
          x: '2010',
          y: 80.3,
          r: 80.4,
        },
        {
          name: '2000',
          x: '2000',
          y: 80.3,
          r: 78,
        },
        {
          name: '1990',
          x: '1990',
          y: 75.4,
          r: 79,
        },
      ],
    },
    {
      name: 'United States',
      series: [
        {
          name: '2010',
          x: '2010',
          y: 78.8,
          r: 310,
        },
        {
          name: '2000',
          x: '2000',
          y: 76.9,
          r: 283,
        },
        {
          name: '1990',
          x: '1990',
          y: 75.4,
          r: 253,
        },
      ],
    },
    {
      name: 'France',
      series: [
        {
          name: '2010',
          x: '2010',
          y: 81.4,
          r: 63,
        },
        {
          name: '2000',
          x: '2000',
          y: 79.1,
          r: 59.4,
        },
        {
          name: '1990',
          x: '1990',
          y: 77.2,
          r: 56.9,
        },
      ],
    },
    {
      name: 'United Kingdom',
      series: [
        {
          name: '2010',
          x: '2010',
          y: 80.2,
          r: 62.7,
        },
        {
          name: '2000',
          x: '2000',
          y: 77.8,
          r: 58.9,
        },
        {
          name: '1990',
          x: '1990',
          y: 75.7,
          r: 57.1,
        },
      ],
    },
  ];
}
