import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

export interface File { ppl: string, lt: string, gl: string, spil: string};

@Component({
  selector: 'admin-semua',
  templateUrl: './admin-semua.component.html',
  styleUrls: ['./admin-semua.component.css']
})

export class AdminSemuaComponent {
  _ref:any;
  id: any;
  path: any;
  pplfile: any;
  ltfile: any;
  glfile: any;
  spilfile: any;
  item: Observable<any[]>;
  roads: Observable<any[]>;
  private fieldArrayAct: Array<any> = [];
  private fieldArrayPass: Array<any> = [];
  private newAttribute: any = {};
  private itemsCollection: AngularFirestoreCollection<any[]>;
  private itemDoc: AngularFirestoreDocument<any[]>;
  private fileDoc: AngularFirestoreDocument<File>;
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
    this.itemDoc = this.db.doc<any>('permohonanBaru/'+this.path);
    this.fileDoc = this.db.doc<File>('permohonanBaru/'+this.path);
    this.fileDoc.valueChanges().subscribe((result) => {
      this.pplfile = result.ppl;
      this.ltfile = result.lt;
      this.glfile = result.gl;
      this.spilfile = result.spil;
    });
    this.item = this.itemDoc.valueChanges();
    console.log(this.item);
    this.itemsCollection = this.db.collection<any>('permohonanBaru/'+this.path+'/roadList');
    this.roads = this.itemsCollection.valueChanges();
    console.log(this.roads);
  }
  addRow(type) {
    console.log(type);
    if(type == 'aktiviti'){
      this.fieldArrayAct.push(this.newAttribute);
      this.newAttribute = {};
    }else{
      this.fieldArrayPass.push(this.newAttribute);
      this.newAttribute = {};
    };
  }
  deleteRow(type, index) {
    console.log(type);
    if(type == 'aktiviti'){
      this.fieldArrayAct.splice(index, 1);
    }else{
      this.fieldArrayPass.splice(index, 1);
    }
  }
  Deleteplan(){
    this._ref.destroy();
  }
}
