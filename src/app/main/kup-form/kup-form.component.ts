import { Component, Input, forwardRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormArray} from '@angular/forms';
import { AngularFireStorage } from 'angularfire2/storage';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { format } from 'date-fns';

export interface Item { time: string, userRef: string, ref: string}

@Component({
  selector: 'app-kup-form',
  templateUrl: './kup-form.component.html',
  styleUrls: ['./kup-form.component.css'],
})
export class KupFormComponent {
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    thirdFormGroup: FormGroup;
    fourthFormGroup: FormGroup;
    fifthFormGroup: FormGroup;
    id: string;
    pasId: string;
    refUser: string;
    private itemsCollection: AngularFirestoreCollection<Item>;
    private itemDoc: AngularFirestoreDocument<Item>;
    data: any;
    date: number;
    fnsDate: string;
    fieldObject: any;
    private fieldArray: Array<any> = [];
    private newAttribute: any = {};
    uploadPercent: Observable<number>;
    downloadURL: Observable<string>;

    constructor(
      private _formBuilder: FormBuilder,
      public storage: AngularFireStorage,
      private route: ActivatedRoute,
      private router: Router,
      public db: AngularFirestore
    ) {
      this.date = Date.now();
      this.fnsDate = format(this.date, 'DD//MM/YYYY');
      console.log(this.fnsDate);
      this.id = this.route.snapshot.paramMap.get('id');
      console.log(this.id);
      this.itemsCollection = db.collection<Item>('users/'+this.id+"/permohonan");
      this.itemDoc = db.doc<Item>('users/'+this.id);
      this.itemDoc.valueChanges().subscribe((result) =>{
      console.log(result);
      this.data = result;
      });
    }

    ngOnInit() {
      this.firstFormGroup = this._formBuilder.group({
        id: [this.id],
        status: [0],
        statusText: ['Permohonan Baru'],
        newutility: ['', Validators.required],
        projname: ['', Validators.required],
        district: ['', Validators.required],
        sector: ['', Validators.required],
        startdate: ['', Validators.required],
        enddate: ['', Validators.required],
        totaldays: ['', Validators.required],
        estimation: ['', Validators.required]
      });
      this.secondFormGroup = this._formBuilder.group({
        roadname: ['', Validators.required],
        startcor: ['', Validators.required],
        endcor: ['', Validators.required],
        pihak: ['', Validators.required],
        method: ['', Validators.required],
        length: ['', Validators.required],
        hdd: ['', Validators.required],
        tunnelling: ['', Validators.required],
        total: ['', Validators.required]
      });
      this.thirdFormGroup = this._formBuilder.group({
        company: ['', Validators.required],
        address: ['', Validators.required],
        pegawai: ['', Validators.required],
        ic: ['', Validators.required],
        role: ['', Validators.required],
        email: ['', Validators.required],
        phoneno: ['', Validators.required],
        fax: ['', Validators.required]
      });
      this.fourthFormGroup = this._formBuilder.group({
        company2: ['', Validators.required],
        ssm2: ['', Validators.required],
        address2: ['', Validators.required],
        pegawai2: ['', Validators.required],
        ic2: ['', Validators.required],
        role2: ['', Validators.required],
        email2: ['', Validators.required],
        phoneno2: ['', Validators.required],
        fax2: ['', Validators.required],

      });
      this.fifthFormGroup = this._formBuilder.group({
        ppl: [''],
        lt: [''],
        gl: [''],
        spil: [''],
      });
    }

    addFieldValue() {
        this.fieldArray.push(this.newAttribute)
        this.newAttribute = {};
    }

    deleteFieldValue(index) {
        this.fieldArray.splice(index, 1);
    }

    uploadFile(event, path) {
      const file = event.target.files[0];
      const filePath = path+'/'+this.id+'/'+this.firstFormGroup.value.projname;
      console.log(filePath);
      const ref = this.storage.ref(filePath);
      const task = ref.put(file);
      this.uploadPercent = task.percentageChanges();
      task.snapshotChanges().pipe(
        finalize(() => {
            console.log(path);
            ref.getDownloadURL().subscribe((result) => {
              console.log(result);
              if(path == "ppl"){
                console.log('PPL');
                this.fifthFormGroup.value.ppl = result;
              }else if(path == "lt"){
                console.log('LT');
                this.fifthFormGroup.value.lt = result;
              }else if(path == "gl"){
                console.log('GL');
                this.fifthFormGroup.value.gl = result;
              }else if(path == "spil"){
                console.log('SPIL');
                this.fifthFormGroup.value.spil = result;
              }else{
                console.log('Error: No file path selected');
              }
            });
          }
        )
      ).subscribe();
    }

    saveFB(){
      console.log("Saving Data");
      this.firstFormGroup.value.startdate = format(this.firstFormGroup.value.startdate, 'DD/MM/YYYY');
      this.firstFormGroup.value.enddate = format(this.firstFormGroup.value.enddate, 'DD/MM/YYYY');
      // console.log(this.firstFormGroup.value.startdate);
      // console.log(this.date);
      // console.log(this.fieldArray[0].roadname);
      this.itemsCollection.add({time: this.fnsDate, userRef: '', ref: ''})
        .then((refId)=>{
          console.log(refId.id);
          this.refUser = refId.id;
          this.itemDoc = this.db.doc<Item>('users/'+this.id+'/permohonan/'+refId.id);
          this.itemDoc.update({time: this.fnsDate, userRef: refId.id, ref: refId.id});
          this.itemDoc.update(this.firstFormGroup.value);
          this.itemDoc.update(this.secondFormGroup.value);
          this.itemDoc.update(this.thirdFormGroup.value);
          this.itemDoc.update(this.fourthFormGroup.value);
          this.itemDoc.update(this.fifthFormGroup.value);
          for(var i=0; i<this.fieldArray.length; ++i){
            this.itemDoc = this.db.doc<Item>('users/'+this.id+'/permohonan/'+refId.id+'/roadList/'+i);
            this.itemDoc.set(this.fieldArray[i]);
          };
        })
        .then((result) => {
          this.itemsCollection = this.db.collection<Item>('permohonanBaru');
          this.itemsCollection.add({time: this.fnsDate, userRef: '', ref: ''})
            .then((refId)=>{
              console.log(refId.id);
              this.itemDoc = this.db.doc<Item>('permohonanBaru/'+refId.id);
              this.itemDoc.update({time: this.fnsDate, userRef: this.refUser, ref: refId.id});
              this.itemDoc.update(this.firstFormGroup.value);
              this.itemDoc.update(this.secondFormGroup.value);
              this.itemDoc.update(this.thirdFormGroup.value);
              this.itemDoc.update(this.fourthFormGroup.value);
              this.itemDoc.update(this.fifthFormGroup.value);
              for(var i=0; i<this.fieldArray.length; ++i){
                this.itemDoc = this.db.doc<Item>('permohonanBaru/'+refId.id+'/roadList/'+i);
                this.itemDoc.set(this.fieldArray[i]);
              };
            })
            .then((result)=>{
              this.router.navigate(['/izinlalu', { id: this.id }])
            });
        });
    }
  }
