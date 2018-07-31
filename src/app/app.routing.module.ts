import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
// import { TableComponent }   from './table/table.component';
// import { TypographyComponent }   from './typography/typography.component';
// import { IconsComponent }   from './icons/icons.component';
// import { NotificationsComponent }   from './notifications/notifications.component';
import { UpgradeComponent }   from './upgrade/upgrade.component';
// import { KupFormComponent }   from './kup-form/kup-form.component';
import { KupLoginComponent }   from './kup-login/kup-login.component';
import { KupSignupComponent }   from './kup-signup/kup-signup.component';
import { KupRegisterComponent }   from './kup-register/kup-register.component';
import { DashboardComponent }   from './main/dashboard/dashboard.component';
// import { IzinLaluComponent }   from './izin-lalu/izin-lalu.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'dashboard', component: DashboardComponent },
    { path: 'login', component: KupLoginComponent },
    { path: 'signup', component: KupSignupComponent },
    { path: 'register', component: KupRegisterComponent },
    { path: 'upgrade', component: UpgradeComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutes {}
