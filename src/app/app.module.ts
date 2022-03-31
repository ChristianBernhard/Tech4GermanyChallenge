import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClient } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { DataTableComponent } from './data-table/data-table.component';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DataChartComponent } from './data-chart/data-chart.component';

import { NgxChartsModule }from '@swimlane/ngx-charts';


@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    DataChartComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSortModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    NgxChartsModule,
    HttpClient,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
