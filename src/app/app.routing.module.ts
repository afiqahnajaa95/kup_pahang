import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { UpgradeComponent }   from './upgrade/upgrade.component';
import { KupLoginComponent }   from './kup-login/kup-login.component';
import { KupSignupComponent }   from './kup-signup/kup-signup.component';
import { KupRegisterComponent }   from './kup-register/kup-register.component';
import { MainComponent }   from './main/main.component';

const approutes: Routes = [
      {
      path: '',
      component: MainComponent
    },
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: KupLoginComponent },
    { path: 'signup', component: KupSignupComponent },
    { path: 'register', component: KupRegisterComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(approutes, { enableTracing: true } ) ],
  exports: [ RouterModule ]
})
export class AppRoutes {}
