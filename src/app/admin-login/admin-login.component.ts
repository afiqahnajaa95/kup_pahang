import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, AuthenticationService } from '../_services/index';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
// export interface DialogData {
//   animal: string;
//   name: string;
// }
@Component({
  selector: 'admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})

export class AdminLoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    login: FormGroup;
    logstatus: any;
    admin: any;
    id: any;
    private itemDoc: AngularFirestoreDocument<any[]>;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private _formBuilder: FormBuilder,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        public firebase: AngularFireAuth,
        public db: AngularFirestore
    ) { }

    ngOnInit() {
      this.login = this._formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      })
    }

    loginF(){
      console.log("Logging in");
      console.log(this.login);
      this.firebase.auth.signInWithEmailAndPassword(this.login.value.email, this.login.value.password)
        .then((data) => {
          console.log(data.user.uid);
          this.id = data.user.uid;
          console.log("Successful login");
          this.itemDoc = this.db.doc<any[]>('users/'+this.id);
          this.itemDoc.valueChanges().subscribe((result) =>{
            console.log(result);
            this.admin = result;
            if(this.admin.admin){
              this.router.navigate(['/admindash', { id: this.id }]);
            }else{
              this.router.navigate(['/login']);
            }
          });
        })
        .catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
          console.log(errorCode);
        });
    }
}
