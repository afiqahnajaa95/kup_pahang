import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { MainComponent }   from './main.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ProfileComponent }   from './profile/profile.component';
import { IconsComponent }   from './icons/icons.component';
import { NotificationsComponent }   from './notifications/notifications.component';
import { KupFormComponent }   from './kup-form/kup-form.component';
import { IzinLaluComponent }   from './izin-lalu/izin-lalu.component';
import { PermitKerjaComponent }   from './permit-kerja/permit-kerja.component';
import { SemuaComponent }   from './semua/semua.component';

const Mainroutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: '', component: MainComponent,
    children: [
    { path: 'profile', component: ProfileComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'kupform', component: KupFormComponent },
    { path: 'izinlalu', component: IzinLaluComponent },
    { path: 'permitkerja', component: PermitKerjaComponent },
    { path: 'semua', component: SemuaComponent }
  ]
 }
];

@NgModule({
  imports: [ RouterModule.forChild(Mainroutes) ],
  exports: [ RouterModule ]
})
export class MainRoutingModule {}
