import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent }   from './admin.component';
import { IconsComponent }   from '../main/icons/icons.component';
import { NotificationsComponent }   from '../main/notifications/notifications.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminSemuaComponent } from './admin-semua/admin-semua.component';
import { AdminBaruComponent } from './admin-baru/admin-baru.component';
import { AdminPermitComponent } from './admin-permit/admin-permit.component';
import { AdminIzinComponent } from './admin-izin/admin-izin.component';
import { AdminIzinSemuaComponent } from './admin-izinsemua/admin-izinsemua.component';
import { UserProfileComponent } from './userprofile/userprofile.component';
import { PageNotFoundComponent } from '../pagenotfound/pagenotfound.component';

const AdminRoutes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
    { path: 'icons', component: IconsComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'admindash', component: AdminDashboardComponent },
    { path: 'adminsemua', component: AdminSemuaComponent },
    { path: 'adminpermit', component: AdminPermitComponent },
    { path: 'adminlalu', component: AdminIzinComponent },
    { path: 'adminizin', component: AdminIzinSemuaComponent },
    { path: 'adminbaru', component: AdminBaruComponent },
    { path: 'userprofile', component: UserProfileComponent },
    { path: '**', component: PageNotFoundComponent }
  ]
 }
];

@NgModule({
  imports: [ RouterModule.forChild(AdminRoutes) ],
  exports: [ RouterModule ]
})
export class AdminRoutingModule {}
