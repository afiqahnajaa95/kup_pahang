import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormArray} from '@angular/forms';

@Component({
  selector: 'app-kup-form',
  templateUrl: './kup-form.component.html',
  styleUrls: ['./kup-form.component.css']
})
export class KupFormComponent {
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    thirdFormGroup: FormGroup;
    fourthFormGroup: FormGroup;
    fifthFormGroup: FormGroup;

    private fieldArray: Array<any> = [];
    private newAttribute: any = {};

    constructor(private _formBuilder: FormBuilder) { }

    ngOnInit() {
      this.firstFormGroup = this._formBuilder.group({
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
        roadname1: ['', Validators.required],
        startcor1: ['', Validators.required],
        endcor1: ['', Validators.required],
        pihak1: ['', Validators.required],
        method1: ['', Validators.required],
        length1: ['', Validators.required],
        roadname2: ['', Validators.required],
        startcor2: ['', Validators.required],
        endcor2: ['', Validators.required],
        pihak2: ['', Validators.required],
        method2: ['', Validators.required],
        length2: ['', Validators.required],
        roadname3: ['', Validators.required],
        startcor3: ['', Validators.required],
        endcor3: ['', Validators.required],
        pihak3: ['', Validators.required],
        method3: ['', Validators.required],
        length3: ['', Validators.required],
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
        fax2: ['', Validators.required]
      });
      this.fifthFormGroup = this._formBuilder.group({
      });
    }

    addFieldValue() {
        this.fieldArray.push(this.newAttribute)
        this.newAttribute = {};
    }

    deleteFieldValue(index) {
        this.fieldArray.splice(index, 1);
    }
  }
