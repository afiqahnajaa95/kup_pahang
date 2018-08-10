import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { UpgradeComponent }   from './upgrade/upgrade.component';
import { KupLoginComponent }   from './kup-login/kup-login.component';
import { KupSignupComponent }   from './kup-signup/kup-signup.component';
import { KupRegisterComponent }   from './kup-register/kup-register.component';
import { MainComponent }   from './main/main.component';
import { AdminComponent }   from './admin/admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { TrackFormComponent } from './track-form/track-form.component';
import { TrackFormResultComponent } from './track-form-result/track-form-result.component';

const approutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: '',
    component: MainComponent
  },
  { path: 'login', component: KupLoginComponent },
  { path: 'signup', component: KupSignupComponent },
  { path: 'register', component: KupRegisterComponent },
  { path: 'adminlogin', component: AdminLoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'track-page', component: TrackFormComponent },
  { path: 'track-result', component: TrackFormResultComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(approutes) ],
  exports: [ RouterModule ]
})
export class AppRoutes {}
