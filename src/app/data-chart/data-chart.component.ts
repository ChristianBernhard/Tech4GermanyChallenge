import { Component, OnInit } from '@angular/core';
import { GovData, GovernmentService } from '../government.service'; 

export type ChartData = {
  name: string;
  value: number;
}


@Component({
  selector: 'app-data-chart',
  templateUrl: './data-chart.component.html',
  styleUrls: ['./data-chart.component.css']
})
export class DataChartComponent implements OnInit {

  data!: ChartData[];
  constructor(private governmentService: GovernmentService) { }

  ngOnInit(): void {
    this.governmentService.getGovernmentData().subscribe((data) => this.data = this.transformData(data));
  }

  transformData(dataSource: GovData[]): ChartData[] {
    return dataSource.map(item => {
      return {
        name: item.department,
        value: item.datasets
      } as ChartData
    });
  }

}