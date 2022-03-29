import { Component, OnInit } from '@angular/core';
import { GovernmentService } from '../government.service'; 

@Component({
  selector: 'app-data-chart',
  templateUrl: './data-chart.component.html',
  styleUrls: ['./data-chart.component.css']
})
export class DataChartComponent implements OnInit {
  data = this.transformData();
  constructor(private governmentService: GovernmentService) { }

  ngOnInit(): void {
    this.data = this.transformData();
  }

  transformData() {
    const newArray = this.governmentService.getGovernmentData().map(item => {
      return {
        "name":item.department,
        "value":item.datasets
      }
    })
    return newArray
  }

}
