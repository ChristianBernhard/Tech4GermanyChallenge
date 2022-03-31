import { Component, ViewChild, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { GovData, GovernmentService } from '../government.service'; 

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  displayedColumns: string[] = ['department', 'description', 'datasets'];
  dataSource!: MatTableDataSource<GovData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort = new MatSort;
  constructor(private governmentService: GovernmentService) { }


  ngOnInit(): void {
    this.governmentService.getGovernmentData().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyUserInputFilterToDataTable(event: Event) {
    const userInput = (event.target as HTMLInputElement).value;
    this.dataSource.filter = this.preProcessUserInput(userInput);
  }

  preProcessUserInput(userInput: string) {
    return userInput.trim().toLowerCase();
  }
}
