import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
// import { AlertService, UserService } from '../_services/index';
// import { AngularFireAuth } from 'angularfire2/auth';
// import { auth } from 'firebase';

@Component({
  selector: 'app-kup-signup',
  templateUrl: './kup-signup.component.html',
  styleUrls: ['./kup-signup.component.css']
})

export class KupSignupComponent {
    model: any = {};
    loading = false;
    signup: FormGroup;

    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private _formBuilder: FormBuilder) { }

    ngOnInit() {
      this.signup = this._formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      })
    }

        registerF(){
          console.log("Registering user");
          this.router.navigate(['/register']);
        }
}
