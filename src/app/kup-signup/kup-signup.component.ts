import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
// import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-kup-signup',
  templateUrl: './kup-signup.component.html',
  styleUrls: ['./kup-signup.component.css']
})

export class KupSignupComponent {
  // kupregister: any[];
  //
  // constructor(db: AngularFireDatabase){
  //   db.list('/kupregister')
  //     .subscribe(kupregister => {
  //       this.kupregister = kupregister;
  //       console.log(this.kupregister);
  //     });
  }
}
