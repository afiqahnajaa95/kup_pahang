import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormArray} from '@angular/forms';
import { Observable } from 'rxjs';
import { format } from 'date-fns';

export interface File { ppl: string, lt: string, gl: string, spil: string, id: string, userRef: string, time: string, company: string, projname: string};
export interface Data { time: string, userRef: string, status: number, subStatus: number, statusText: string, note: string};
export interface Save { izintime: string, izinref: string};


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
  items: any;
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
    this.fileDoc = this.db.doc<File>('permohonan/'+this.path);
    this.item = this.fileDoc.valueChanges();
    console.log(this.item);
    this.fileDoc.valueChanges().subscribe((result) => {
      this.items = result;
      this.pplfile = result.ppl;
      this.ltfile = result.lt;
      this.glfile = result.gl;
      this.spilfile = result.spil;
      this.userId = result.id;
      this.userRef = result.userRef;
      this.name = result.company;
      this.project = result.projname;
    });
    console.log(this.items);
    this.filesCollection = this.db.collection<File>('permohonan/'+this.path+'/roadList');
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
    console.log("Updating Remarks");
    for(var i=0; i<this.fieldArrayAct.length; ++i){
      this.itemDoc = this.db.doc<Data>('users/'+this.userId+'/permohonan/'+this.userRef+'/remarks/'+i);
      this.itemDoc.set(this.fieldArrayAct[i]);
      this.itemDoc = this.db.doc<Data>('permohonan/'+this.path+'/remarks/'+i);
      this.itemDoc.set(this.fieldArrayAct[i]);
    }
    console.log("Approved");
    this.itemDoc = this.db.doc<Data>('users/'+this.userId+'/permohonan/'+this.userRef);
    this.itemDoc.update(this.pass.value);
    this.itemDoc.update({status: 1, statusText: 'Dalam Proses'});
    this.itemDoc = this.db.doc<Data>('permohonan/'+this.path);
    this.itemDoc.update(this.pass.value);
    this.itemDoc.update({status: 1, statusText: 'Dalam Proses'})
    .then((result)=>{
      this.router.navigate(['/admindash', { id: this.id }])
    });
  }

  declineF(){
    console.log("Updating Remarks");
    for(var i=0; i<this.fieldArrayAct.length; ++i){
      this.itemDoc = this.db.doc<Data>('users/'+this.userId+'/permohonan/'+this.userRef+'/remarks/'+i);
      this.itemDoc.set(this.fieldArrayAct[i]);
      this.itemDoc = this.db.doc<Data>('permohonan/'+this.path+'/remarks/'+i);
      this.itemDoc.set(this.fieldArrayAct[i]);
    }
    console.log("Declined");
    this.itemDoc = this.db.doc<Data>('users/'+this.userId+'/permohonan/'+this.userRef);
    this.itemDoc.update(this.pass.value);
    this.itemDoc.update({status: 1, subStatus: 1, statusText: 'Ditolak'});
    this.itemDoc = this.db.doc<Data>('permohonan/'+this.path);
    this.itemDoc.update(this.pass.value);
    this.itemDoc.update({status: 1, subStatus: 1, statusText: 'Ditolak'})
    .then((result)=>{
      this.router.navigate(['/admindash', { id: this.id }])
    });
  }
}
