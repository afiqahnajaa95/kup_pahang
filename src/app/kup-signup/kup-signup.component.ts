import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-kup-signup',
  templateUrl: './kup-signup.component.html',
  styleUrls: ['./kup-signup.component.css']
})
export class KupSignupComponent {
  // options: FormGroup;
  //
  // constructor(fb: FormBuilder) {
  //   this.options = fb.group({
  //     register: ['', Validators.required],
  //     comp: ['', Validators.required],
  //     ssmreg: ['', Validators.required],
  //     addcomp: ['', Validators.required],
  //     name: ['', Validators.required],
  //     icmu: ['', Validators.required],
  //     jawatan: ['', Validators.required],
  //     emailmu: ['', Validators.required],
  //     phonenum: ['', Validators.required],
  //     faxnum: ['', Validators.required]
  //   });
  }
