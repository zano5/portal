import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

interface Country {
  name: string;
  flag: string;
  date: string;
  type: string;
  code: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Success',
    flag: '12 june 2019',
    date: '12 june 2019',
    type: 'Auth',
    code: 100
  },
  {
    name: 'Fail',
    flag: 'c/cf/Flag_of_Canada.svg',
    date: '12 june 2019',
    type: 'Auth',
    code: 200
  },
  {
    name: 'Fail',
    flag: 'c/cf/Flag_of_Canada.svg',
    date: '12 june 2019',
    type: 'Auth',
    code: 200
  },
  {
    name: 'Fail',
    flag: 'c/cf/Flag_of_Canada.svg',
    date: '12 june 2019',
    type: 'Auth',
    code: 200
  },
  {
    name: 'Fail',
    flag: 'c/cf/Flag_of_Canada.svg',
    date: '12 june 2019',
    type: 'Auth',
    code: 200
  },
  {
    name: 'Fail',
    flag: 'c/cf/Flag_of_Canada.svg',
    date: '12 june 2019',
    type: 'Auth',
    code: 200
  },
  
];

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 5], label: 'Fail' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Success' }
  ];

  countries = COUNTRIES;
  
  constructor() { }

  ngOnInit() {
  }

}
