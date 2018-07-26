import { Component, ViewChild } from '@angular/core';
import * as Chartist from 'chartist';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

declare var $:any;

@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    styleUrls: ['dashboard.component.css'],
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent{
    displayedColumns = ['position', 'name', 'weight', 'symbol', 'category', 'date'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    }

    applyFilter(filterValue: string) {
      filterValue = filterValue.trim(); // Remove whitespace
      filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
      this.dataSource.filter = filterValue;
    }
}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  category: string;
  date: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'null', weight: 1, symbol: 'null', category: 'kontraktor', date: '26/07/2018'},
];
