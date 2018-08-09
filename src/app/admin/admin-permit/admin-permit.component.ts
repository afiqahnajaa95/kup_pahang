import { Component, ViewChild, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

declare var $:any;

@Component({
    selector: 'admin-permit',
    moduleId: module.id,
    styleUrls: ['admin-permit.component.css'],
    templateUrl: 'admin-permit.component.html'
})

export class AdminPermitComponent{
    id: string;
    new: number = 0;
    izin: number = 0;
    permit: number = 0;
    cpc: number = 0;
    wang: number = 0;
    path: string;
    private itemsCollection: AngularFirestoreCollection<any>;
    items: Observable<any[]>;
    items$: Observable<any[]>;
    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private db: AngularFirestore
    ){
      this.id = this.route.snapshot.paramMap.get('id');
      console.log(this.id);
      this.path = 'permohonan';
      this.items$ = db.collection(this.path, ref => {
        let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
        query = query.where('status', '==', 0);
        return query;
      }).valueChanges();
      this.items$.subscribe((result)=>{
        console.log(result.length);
        this.new = result.length;
      });
      this.items$ = db.collection(this.path, ref => {
        let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
        query = query.where('status', '==', 1);
        return query;
      }).valueChanges();
      this.items$.subscribe((result)=>{
        console.log(result.length);
        this.izin = result.length;
      });
      this.items$ = db.collection(this.path, ref => {
        let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
        query = query.where('status', '==', 2);
        return query;
      }).valueChanges();
      this.items$.subscribe((result)=>{
        console.log(result.length);
        this.permit = result.length;
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
      this.router.navigate(['/adminpermitsemua', { id: this.id, file: path }]);
    }

    openUser(path){
      console.log("View user");
      console.log(path);
      this.router.navigate(['/userprofile', { id: this.id, user: path }]);
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
