import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { MainComponent }   from './main.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { IconsComponent }   from './icons/icons.component';
import { NotificationsComponent }   from './notifications/notifications.component';
import { KupFormComponent }   from './kup-form/kup-form.component';
import { IzinLaluComponent }   from './izin-lalu/izin-lalu.component';
import { SemuaComponent }   from './semua/semua.component';

const Mainroutes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'kupform', component: KupFormComponent },
    { path: 'izinlalu', component: IzinLaluComponent },
    { path: 'semua', component: SemuaComponent }
  ]
 }
];

@NgModule({
  imports: [ RouterModule.forChild(Mainroutes) ],
  exports: [ RouterModule ]
})
export class MainRoutingModule {}
