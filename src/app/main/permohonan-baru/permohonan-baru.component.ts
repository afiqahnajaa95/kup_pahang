import { Component, ViewChild, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
declare var $:any;

@Component({
    selector: 'app-permohonan-baru',
    moduleId: module.id,
    styleUrls: ['permohonan-baru.component.css'],
    templateUrl: 'permohonan-baru.component.html'
})

export class PermohonanBaruComponent{
    id: string;
    new: number = 0;
    izin: number = 0;
    permit: number = 0;
    cpc: number = 0;
    wang: number = 0;
    something: any;
    path: string;
    private itemsCollection: AngularFirestoreCollection<any>;
    private itemDoc: AngularFirestoreDocument<any>;
    items: Observable<any[]>;
    items$: Observable<any[]>;
    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private db: AngularFirestore
    ){
      this.id = this.route.snapshot.paramMap.get('id');
      console.log(this.id);
      this.path = 'users/'+this.id+'/permohonan';
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
      this.items$ = db.collection(this.path, ref => {
          let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
          query = query.where('status', '==', 0);
          return query;
        }).valueChanges();
      this.items$.subscribe((result)=>{
        console.log(result.length);
        this.new = result.length;
      });
      this.items$ = db.collection(this.path).valueChanges();
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
