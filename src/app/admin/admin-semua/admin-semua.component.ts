import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormArray} from '@angular/forms';
import { Observable } from 'rxjs';
import { format } from 'date-fns';

export interface File { ppl: string, lt: string, gl: string, spil: string, id: string, userRef: string, time: string, company: string, projname: string};
export interface Data { time: string, userRef: string, status: number, note: string};
export interface Save { time: string, userRef: string, status: number, id: string, ref: string, fileRef: string, userFileRef: string, projname: string, company: string, fileRuj: string};


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
  date: number;
  fnsDate: string;
  item: Observable<File>;
  roads: Observable<any[]>;
  userId: string;
  userRef: string;
  fileRef: string;
  name: string;
  project: string;
  pass: FormGroup;
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
    private storage: AngularFireStorage,
    private _formBuilder: FormBuilder,
  ){
    this.date = Date.now();
    this.fnsDate = format(this.date, 'DD/MM/YYYY');
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.path = this.route.snapshot.paramMap.get('file');
    console.log(this.path);
    this.fileDoc = this.db.doc<File>('permohonanBaru/'+this.path);
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
    this.filesCollection = this.db.collection<File>('permohonanBaru/'+this.path+'/roadList');
    this.roads = this.filesCollection.valueChanges();
    console.log(this.roads);
  }
  ngOnInit(){
    this.pass = this._formBuilder.group({
      ruj: ['', Validators.required],
      note: ['', Validators.required],
    });
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
    this.itemsCollection.add({time: this.fnsDate, userRef: '', status: 1, note: ''})
      .then((refId)=>{
        console.log(refId.id);
        this.itemDoc = this.db.doc<Data>('users/'+this.userId+'/permohonan/'+this.userRef+'/remarks/'+refId.id);
        this.itemDoc.update(this.pass.value);
        for(var i=0; i<this.fieldArrayAct.length; ++i){
          this.itemDoc = this.db.doc<Data>('users/'+this.userId+'/permohonan/'+this.userRef+'/remarks/'+i);
          this.itemDoc.set(this.fieldArrayAct[i]);
        }
      });
    this.itemsCollection = this.db.collection<Data>('permohonanBaru/'+this.path+'/remarks');
    this.itemsCollection.add({time: this.fnsDate, userRef: '', status: 1, note: ''})
      .then((refId)=>{
        console.log(refId.id);
        this.itemDoc = this.db.doc<Data>('permohonanBaru/'+this.path+'/remarks/'+refId.id);
        this.itemDoc.update(this.pass.value);
        for(var i=0; i<this.fieldArrayAct.length; ++i){
          this.itemDoc = this.db.doc<Data>('permohonanBaru/'+this.path+'/remarks/'+i);
          this.itemDoc.set(this.fieldArrayAct[i]);
        }
      });
    this.itemDoc = this.db.doc<Data>('users/'+this.userId+'/permohonan/'+this.userRef);
    this.itemDoc.update({status: 1, note: this.pass.value.note});
    this.itemDoc = this.db.doc<Data>('permohonanBaru/'+this.path);
    this.itemDoc.update({status: 1, note: this.pass.value.note});
    console.log("Creating Permit Kerja file");
    this.saveCollection = this.db.collection<Save>('users/'+this.userId+'/permitKerja');
    this.saveCollection.add({time: this.fnsDate, userRef: this.userRef, status: 1, id: this.userId, ref: this.path, fileRef: '', userFileRef: '', projname: '', company: '', fileRuj: ''})
      .then((refId)=>{
        console.log(refId.id);
        this.fileRef = refId.id;
        this.saveDoc = this.db.doc<Save>('users/'+this.userId+'/permitKerja/'+refId.id);
        this.saveDoc.update({fileRef: refId.id, projname: this.project, company: this.name, fileRuj: this.pass.value.ruj});
      });
    this.saveCollection = this.db.collection<Save>('permitKerja');
    this.saveCollection.add({time: this.fnsDate, userRef: this.userRef, status: 1, id: this.userId, ref: this.path, fileRef: '', userFileRef: '', projname: '', company: '', fileRuj: ''})
      .then((refId)=>{
        console.log(refId.id);
        this.saveDoc = this.db.doc<Save>('/permitKerja/'+refId.id);
        this.saveDoc.update({fileRef: refId.id, userFileRef: this.fileRef, projname: this.project, company: this.name, fileRuj: this.pass.value.ruj});
      })
      .then((result)=>{
        this.router.navigate(['/adminbaru', { id: this.id }])
      });
  }

  declineF(){
    console.log("Declined");
    this.itemsCollection = this.db.collection<Data>('users/'+this.userId+'/permohonan/'+this.userRef+'/remarks');
    this.itemsCollection.add({time: this.fnsDate, userRef: '', status: 2, note: ''})
      .then((refId)=>{
        console.log(refId.id);
        this.itemDoc = this.db.doc<Data>('users/'+this.userId+'/permohonan/'+this.userRef+'/remarks/'+refId.id);
        this.itemDoc.update(this.pass.value);
        for(var i=0; i<this.fieldArrayAct.length; ++i){
          this.itemDoc = this.db.doc<Data>('users/'+this.userId+'/permohonan/'+this.userRef+'/remarks/'+i);
          this.itemDoc.set(this.fieldArrayAct[i]);
        }
      });
    this.itemsCollection = this.db.collection<Data>('permohonanBaru/'+this.path+'/remarks');
    this.itemsCollection.add({time: this.fnsDate, userRef: '', status: 2, note: ''})
      .then((refId)=>{
        console.log(refId.id);
        this.itemDoc = this.db.doc<Data>('permohonanBaru/'+this.path+'/remarks/'+refId.id);
        this.itemDoc.update(this.pass.value);
        for(var i=0; i<this.fieldArrayAct.length; ++i){
          this.itemDoc = this.db.doc<Data>('permohonanBaru/'+this.path+'/remarks/'+i);
          this.itemDoc.set(this.fieldArrayAct[i]);
        }
      });
    this.itemDoc = this.db.doc<Data>('users/'+this.userId+'/permohonan/'+this.userRef);
    this.itemDoc.update({status: 2, note: this.pass.value.note});
    this.itemDoc = this.db.doc<Data>('permohonanBaru/'+this.path);
    this.itemDoc.update({status: 2, note: this.pass.value.note})
      .then((result)=>{
        this.router.navigate(['/adminbaru', { id: this.id }])
      });
  }
}
