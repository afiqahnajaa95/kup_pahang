import { Component, ViewChild, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

declare var $:any;

@Component({
    selector: 'admin-dashboard',
    moduleId: module.id,
    styleUrls: ['admin-dashboard.component.css'],
    templateUrl: 'admin-dashboard.component.html'
})

export class AdminDashboardComponent{
    id: string;
    private itemsCollection: AngularFirestoreCollection<any>;
    items: Observable<any[]>;
    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private db: AngularFirestore
    ){
      this.id = this.route.snapshot.paramMap.get('id');
      console.log(this.id);
      this.itemsCollection = db.collection<any>('permohonanBaru');
      this.items = this.itemsCollection.valueChanges();
      console.log(this.items);
    }
    displayedColumns = ['projname', 'company', 'date', 'status', 'comment'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    ngOnInit(){}

    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    }

    applyFilter(filterValue: string) {
      filterValue = filterValue.trim(); // Remove whitespace
      filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
      this.dataSource.filter = filterValue;
    }

    openFile(path){
      console.log("Open file");
      console.log(path);
      this.router.navigate(['/izinlalu-detail', { id: this.id, file: path }]);
    }

    openUser(path){
      console.log("View user");
      console.log(path);
      this.router.navigate(['/user-detail', { id: this.id, user: path }]);
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
