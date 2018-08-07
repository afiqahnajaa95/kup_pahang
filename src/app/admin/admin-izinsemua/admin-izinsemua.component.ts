import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { format } from 'date-fns';

export interface File { ppl: string, lt: string, gl: string, spil: string, id: string, userRef: string, time: string, company: string, projname: string};
export interface Data { time: string, userRef: string, status: number};
export interface Save { time: string, userRef: string, status: number, id: string, ref: string, fileRef: string, userFileRef: string, projname: string, company: string};


@Component({
  selector: 'admin-izinsemua',
  templateUrl: './admin-izinsemua.component.html',
  styleUrls: ['./admin-izinsemua.component.css']
})

export class AdminIzinSemuaComponent {
  _ref:any;
  id: any;
  path: any;
  pplfile: any;
  ltfile: any;
  glfile: any;
  spilfile: any;
  date: number;
  fnsDate: string;
  item: Observable<File>;
  roads: Observable<any[]>;
  userId: string;
  userRef: string;
  fileRef: string;
  name: string;
  project: string;
  public fieldArrayAct: Array<any> = [];
  public fieldArrayPass: Array<any> = [];
  public newAttribute: any = {};
  private itemsCollection: AngularFirestoreCollection<Data>;
  private filesCollection: AngularFirestoreCollection<File>;
  private saveCollection: AngularFirestoreCollection<Save>;
  private itemDoc: AngularFirestoreDocument<Data>;
  private fileDoc: AngularFirestoreDocument<File>;
  private saveDoc: AngularFirestoreDocument<Save>;
  constructor(
    private db: AngularFirestore,
    private route: ActivatedRoute,
    private router: Router,
    private storage: AngularFireStorage
  ){
    this.date = Date.now();
    this.fnsDate = format(this.date, 'DD/MM/YYYY');
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.path = this.route.snapshot.paramMap.get('file');
    console.log(this.path);
    this.fileDoc = this.db.doc<File>('permitKerja/'+this.path);
    this.fileDoc.valueChanges().subscribe((result) => {
      this.pplfile = result.ppl;
      this.ltfile = result.lt;
      this.glfile = result.gl;
      this.spilfile = result.spil;
      this.userId = result.id;
      this.userRef = result.userRef;
      this.name = result.company;
      this.project = result.projname;
    });
    this.item = this.fileDoc.valueChanges();
    console.log(this.item);
  }

  addRow(type) {
    console.log(type);
    this.fieldArrayAct.push(this.newAttribute);
    this.newAttribute = {};
  }

  deleteRow(type, index) {
    console.log(type);
    this.fieldArrayAct.splice(index, 1);
  }

  Deleteplan(){
    this._ref.destroy();
  }

  approveF(){
    console.log("Approved");
    this.itemsCollection = this.db.collection<Data>('users/'+this.userId+'/permohonan/'+this.userRef+'/remarks');
    this.itemsCollection.add({time: this.fnsDate, userRef: '', status: 1})
      .then((refId)=>{
        console.log(refId.id);
        for(var i=0; i<this.fieldArrayAct.length; ++i){
          this.itemDoc = this.db.doc<Data>('users/'+this.userId+'/permohonan/'+this.userRef+'/remarks/'+i);
          this.itemDoc.set(this.fieldArrayAct[i]);
        }
      });
    this.itemsCollection = this.db.collection<Data>('permohonanBaru/'+this.path+'/remarks');
    this.itemsCollection.add({time: this.fnsDate, userRef: '', status: 1})
      .then((refId)=>{
        console.log(refId.id);
        for(var i=0; i<this.fieldArrayAct.length; ++i){
          this.itemDoc = this.db.doc<Data>('permohonanBaru/'+this.path+'/remarks/'+i);
          this.itemDoc.set(this.fieldArrayAct[i]);
        }
      });
    this.itemDoc = this.db.doc<Data>('users/'+this.userId+'/permohonan/'+this.userRef);
    this.itemDoc.update({status: 1});
    this.itemDoc = this.db.doc<Data>('permohonanBaru/'+this.path);
    this.itemDoc.update({status: 1});
    console.log("Creating Permit Kerja file");
    this.saveCollection = this.db.collection<Save>('users/'+this.userId+'/permitKerja');
    this.saveCollection.add({time: this.fnsDate, userRef: this.userRef, status: 1, id: this.userId, ref: this.path, fileRef: '', userFileRef: '', projname: '', company: ''})
      .then((refId)=>{
        console.log(refId.id);
        this.fileRef = refId.id;
        this.saveDoc = this.db.doc<Save>('users/'+this.userId+'/permitKerja/'+refId.id);
        this.saveDoc.update({fileRef: refId.id, projname: this.project, company: this.name});
      });
    this.saveCollection = this.db.collection<Save>('permitKerja');
    this.saveCollection.add({time: this.fnsDate, userRef: this.userRef, status: 1, id: this.userId, ref: this.path, fileRef: '', userFileRef: '', projname: '', company: ''})
      .then((refId)=>{
        console.log(refId.id);
        this.saveDoc = this.db.doc<Save>('/permitKerja/'+refId.id);
        this.saveDoc.update({fileRef: refId.id, userFileRef: this.fileRef, projname: this.project, company: this.name});
      });
  }

  declineF(){
    console.log("Declined");
    this.itemsCollection = this.db.collection<Data>('users/'+this.userId+'/permohonan/'+this.userRef+'/remarks');
    this.itemsCollection.add({time: this.fnsDate, userRef: '', status: 2})
      .then((refId)=>{
        console.log(refId.id);
        for(var i=0; i<this.fieldArrayAct.length; ++i){
          this.itemDoc = this.db.doc<Data>('users/'+this.userId+'/permohonan/'+this.userRef+'/remarks/'+i);
          this.itemDoc.set(this.fieldArrayAct[i]);
        }
      });
    this.itemsCollection = this.db.collection<Data>('permohonanBaru/'+this.path+'/remarks');
    this.itemsCollection.add({time: this.fnsDate, userRef: '', status: 2})
      .then((refId)=>{
        console.log(refId.id);
        for(var i=0; i<this.fieldArrayAct.length; ++i){
          this.itemDoc = this.db.doc<Data>('permohonanBaru/'+this.path+'/remarks/'+i);
          this.itemDoc.set(this.fieldArrayAct[i]);
        }
      });
    this.itemDoc = this.db.doc<Data>('users/'+this.userId+'/permohonan/'+this.userRef);
    this.itemDoc.update({status: 2});
    this.itemDoc = this.db.doc<Data>('permohonanBaru/'+this.path);
    this.itemDoc.update({status: 2});
  }
}
