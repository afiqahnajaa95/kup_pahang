import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
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
  roads: Observable<any[]>;
  private itemsCollection: AngularFirestoreCollection<any[]>;
  private itemDoc: AngularFirestoreDocument<any[]>;
  constructor(
    private db: AngularFirestore,
    private route: ActivatedRoute,
    private router: Router,
    private storage: AngularFireStorage
  ){
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.path = this.route.snapshot.paramMap.get('file');
    console.log(this.path);
    this.itemDoc = db.doc<any>('users/'+this.id+'/permohonan/'+this.path);
    this.item = this.itemDoc.valueChanges();
    console.log(this.item);
    this.itemsCollection = db.collection<any>('users/'+this.id+'/permohonan/'+this.path+'/roadList');
    this.roads = this.itemsCollection.valueChanges();
    console.log(this.roads);
  }
  Deleteplan(){
    this._ref.destroy();
  }
  fileDownload(path){
    console.log(path);
    const ref = this.storage.ref(this.id+path);
    // this.profileUrl = ref.getDownloadURL();
  }
}
