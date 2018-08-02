import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { UpgradeComponent }   from './upgrade/upgrade.component';
import { KupLoginComponent }   from './kup-login/kup-login.component';
import { KupSignupComponent }   from './kup-signup/kup-signup.component';
import { KupRegisterComponent }   from './kup-register/kup-register.component';
import { MainComponent }   from './main/main.component';
import { AdminComponent }   from './admin/admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';

const approutes: Routes = [
      {
      path: '',
      component: MainComponent
    },
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: KupLoginComponent },
    { path: 'signup', component: KupSignupComponent },
    { path: 'register', component: KupRegisterComponent },
    { path: 'adminlogin', component: AdminLoginComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(approutes, { enableTracing: true } ) ],
  exports: [ RouterModule ]
})
export class AppRoutes {}
