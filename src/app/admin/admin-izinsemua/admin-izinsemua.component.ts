import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormArray} from '@angular/forms';
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
  rujs: Observable<any[]>;
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
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
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
    this.filesCollection = this.db.collection<File>('permohonanBaru/'+this.path+'/roadList');
    this.roads = this.filesCollection.valueChanges();
    console.log(this.roads);
    this.filesCollection = this.db.collection<File>('permitKerja/'+this.path+'/remarks');
    this.rujs = this.filesCollection.valueChanges();
    console.log(this.rujs);
  }
  ngOnInit(){
    this.pass = this._formBuilder.group({
      confirmdate: ['', Validators.required],
    });
  }
  viewFile(){
    console.log("Opening file");
  }
  approveF(){
    console.log("Updating document");
    console.log(this.pass.value.confirmdate);
  }
}
