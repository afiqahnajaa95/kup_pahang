import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, AuthenticationService } from '../_services/index';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-kup-login',
  templateUrl: './kup-login.component.html',
  styleUrls: ['./kup-login.component.css']
})

export class KupLoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    login: FormGroup;
    animal: string;
    name: string;
    logstatus: any;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private _formBuilder: FormBuilder,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        public dialog: MatDialog,
        public firebase: AngularFireAuth
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
          console.log(data.user);
          console.log(data.user.uid);
          console.log("Successful login");
          // alert('Login Successful');
          this.router.navigate(['/dashboard', { id: data.user.uid }]);
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

    registerF(){
      console.log("Registering user");
      console.log(this.login);
      this.firebase.auth.createUserWithEmailAndPassword(this.login.value.email, this.login.value.password)
        .then((data) => {
          console.log(data.user);
          console.log("Successful login");
          // alert('Register Successful');
          this.router.navigate(['/register?id=' +data.user.uid]);
        })
        .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
      // const dialogRef = this.dialog.open(KupRegisterDialog, {
      //   width: '800px',
      //   data: {name: this.name, animal: this.animal}
      // });
      //
      // dialogRef.afterClosed().subscribe(result => {
      //   console.log('The dialog was closed');
      //   this.animal = result;
      //   console.log(this.animal);
      // });
    }
}

@Component({
  selector: 'kup-register-dialog',
  templateUrl: 'kup-register-dialog.html',
})
export class KupRegisterDialog {

  constructor(
    public dialogRef: MatDialogRef<KupRegisterDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
