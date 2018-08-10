import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { AlertService, UserService } from '../_services/index';
// import { AngularFireAuth } from 'angularfire2/auth';
// import { auth } from 'firebase';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-track-form',
  templateUrl: './track-form.component.html',
  styleUrls: ['./track-form.component.css']
})

export class TrackFormComponent {
  model: any = {};
  loading = false;
  track: FormGroup;
  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private _formBuilder: FormBuilder) {}
      // private userService: UserService,
      // private alertService: AlertService,
      // public firebase: AngularFireAuth) { }

  ngOnInit(){
    this.track= this._formBuilder.group({
      ssm: ['', Validators.required],
      filenum: ['', Validators.required]
    })
  }

  // track(){
  //   console.log("Tracking user's status...");
  //   console.log(this.track);
  //   this.firebase.auth.createUserWithEmailAndPassword(this.signup.value.email, this.signup.value.password)
  //     .then((data) => {
  //       console.log(data.user);
  //       console.log("Successful login");
  //       this.router.navigate(['/track-result', {id: data.user.uid}]);
  //     })
  //     .catch((error) => {
  //     // Handle Errors here.
  //     var errorCode = error.code;
  //     var errorMessage = error.message;
  //     if (errorCode == 'auth/weak-password') {
  //       alert('The password is too weak.');
  //     } else {
  //       alert(errorMessage);
  //     }
  //     console.log(error);
  //   });
  // }
}
