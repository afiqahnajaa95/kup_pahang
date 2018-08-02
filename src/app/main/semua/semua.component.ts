import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-semua',
  templateUrl: './semua.component.html',
  styleUrls: ['./semua.component.css']
})

export class SemuaComponent {
  _ref:any;
  id: any;
  path: any;
  item: Observable<any[]>;
  private itemsCollection: AngularFirestoreCollection<any[]>;
  private itemDoc: AngularFirestoreDocument<any[]>;
  constructor(
    private db: AngularFirestore,
    private route: ActivatedRoute,
    private router: Router,
  ){
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.path = this.route.snapshot.paramMap.get('file');
    console.log(this.path);
    this.itemDoc = db.doc<any>('users/'+this.id+'/permohonan/'+this.path);
    this.item = this.itemDoc.valueChanges();
    console.log(this.item);
  }
  Deleteplan(){
    this._ref.destroy();
  }
}
