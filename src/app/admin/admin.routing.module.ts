import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent }   from './admin.component';
import { IconsComponent }   from '../main/icons/icons.component';
import { NotificationsComponent }   from '../main/notifications/notifications.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminSemuaComponent } from './admin-semua/admin-semua.component';

const AdminRoutes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
    { path: 'icons', component: IconsComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'admindash', component: AdminDashboardComponent },
    { path: 'adminSemua', component: AdminSemuaComponent }
  ]
 }
];

@NgModule({
  imports: [ RouterModule.forChild(AdminRoutes) ],
  exports: [ RouterModule ]
})
export class AdminRoutingModule {}
