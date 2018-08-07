import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})

export class ForgotPasswordComponent {
  forgotpass: FormGroup;
  constructor(private _formBuilder: FormBuilder){}

  ngOnInit(){
    this.forgotpass = this._formBuilder.group({
      email: ['', Validators.required]
    })
  }
}
