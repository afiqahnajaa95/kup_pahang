import { Component, ViewChild, OnInit } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-izin-lalu',
  templateUrl: './izin-lalu.component.html',
  styleUrls: ['./izin-lalu.component.css']
})

export class IzinLaluComponent{
  displayedColumns = ['projname', 'company', 'date', 'status', 'comment'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any[]>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private db: AngularFirestore,
    public route: ActivatedRoute,
    public router: Router
  ){
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.itemsCollection = db.collection<any>('users/'+this.id+'/permohonan');
    this.items = this.itemsCollection.valueChanges();
    console.log(this.items);
  }

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
