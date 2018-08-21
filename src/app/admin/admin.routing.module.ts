import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent }   from './admin.component';
import { IconsComponent }   from '../main/icons/icons.component';
import { NotificationsComponent }   from '../main/notifications/notifications.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminSemuaComponent } from './admin-semua/admin-semua.component';
import { AdminBaruComponent } from './admin-baru/admin-baru.component';
import { AdminPermitComponent } from './admin-permit/admin-permit.component';
import { AdminPermitSemuaComponent } from './admin-permitsemua/admin-permitsemua.component';
import { AdminIzinComponent } from './admin-izin/admin-izin.component';
import { AdminIzinSemuaComponent } from './admin-izinsemua/admin-izinsemua.component';
import { AdminBatalComponent } from './admin-batal/admin-batal.component';
import { AdminDitolakComponent } from './admin-ditolak/admin-ditolak.component';
import { AdminKIVComponent } from './admin-kiv/admin-kiv.component';
import { AdminMulaKerjaComponent } from './admin-mula-kerja/admin-mula-kerja.component';
import { AdminSiapKerjaComponent } from './admin-siap-kerja/admin-siap-kerja.component';
import { AdminWangCagaranComponent } from './admin-wang-cagaran/admin-wang-cagaran.component';
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
    { path: 'adminpermitsemua', component: AdminPermitSemuaComponent },
    { path: 'adminlalu', component: AdminIzinComponent },
    { path: 'adminizin', component: AdminIzinSemuaComponent },
    { path: 'adminbaru', component: AdminBaruComponent },
    { path: 'userprofile', component: UserProfileComponent },
    { path: 'adminbatal', component: AdminBatalComponent },
    { path: 'adminditolak', component: AdminDitolakComponent },
    { path: 'adminKIV', component: AdminKIVComponent },
    { path: 'adminmulakerja', component: AdminMulaKerjaComponent },
    { path: 'adminsiapkerja', component: AdminSiapKerjaComponent },
    { path: 'adminwangcagaran', component: AdminWangCagaranComponent },
    { path: '**', component: PageNotFoundComponent }
  ]
 }
];

@NgModule({
  imports: [ RouterModule.forChild(AdminRoutes) ],
  exports: [ RouterModule ]
})
export class AdminRoutingModule {}
