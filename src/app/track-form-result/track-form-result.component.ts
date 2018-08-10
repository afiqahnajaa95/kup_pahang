import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { AlertService, UserService } from '../_services/index';
// import { AngularFireAuth } from 'angularfire2/auth';
// import { auth } from 'firebase';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';

@Component({
  selector: 'track-form-result',
  templateUrl: './track-form-result.component.html',
  styleUrls: ['./track-form-result.component.css']
})

export class TrackFormResultComponent {
  model: any = {};
  loading = false;
  result: FormGroup;
  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private _formBuilder: FormBuilder){}
      // private userService: UserService,
      // private alertService: AlertService,
      // public firebase: AngularFireAuth) { }

  ngOnInit(){
    this.result = this._formBuilder.group({
      status: ['', Validators.required],
      comment: ['', Validators.required]
    })
  }
  // register() {
  //     this.loading = true;
  //     this.userService.create(this.model)
  //         .subscribe(
  //             data => {
  //                 this.alertService.success('Registration successful', true);
  //                 this.router.navigate(['/login']);
  //             },
  //             error => {
  //                 this.alertService.error(error);
  //                 this.loading = false;
  //             });
  // }
  // registerF(){
  //   console.log("Registering user");
  //   console.log(this.signup);
  //   this.firebase.auth.createUserWithEmailAndPassword(this.signup.value.email, this.signup.value.password)
  //     .then((data) => {
  //       console.log(data.user);
  //       console.log("Successful login");
  //       // alert('Register Successful');
  //       this.router.navigate(['/register', {id: data.user.uid}]);
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
