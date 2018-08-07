import { Component, ViewChild, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
declare var $:any;

@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    styleUrls: ['dashboard.component.css'],
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent{
    id: string;
    new: number = 0;
    izin: number = 0;
    permit: number = 0;
    cpc: number = 0;
    wang: number = 0;
    private itemsCollection: AngularFirestoreCollection<any>;
    items: Observable<any[]>;
    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private db: AngularFirestore
    ){
      this.id = this.route.snapshot.paramMap.get('id');
      console.log(this.id);
      this.itemsCollection = db.collection<any>('users/'+this.id+'/permohonan');
      this.items = this.itemsCollection.valueChanges();
      console.log(this.items);
      this.items.subscribe((result)=>{
        console.log(result.length);
        this.new = result.length;
      });
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
      this.router.navigate(['/semua', { id: this.id, file: path }]);
    }

    toPermohonan(path){
      console.log("Open file");
      console.log(path);
      this.router.navigate([path, { id: this.id }]);
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
