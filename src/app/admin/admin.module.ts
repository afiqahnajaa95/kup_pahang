import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../../environments/environment';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin.routing.module';
import { AdminSidebarModule } from './admin-sidebar/admin-sidebar.module';
import { FooterModule } from '../main/shared/footer/footer.module';
import { NavbarModule} from '../main/shared/navbar/navbar.module';
import { FixedPluginModule} from '../main/shared/fixedplugin/fixedplugin.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminSemuaComponent } from './admin-semua/admin-semua.component';
import { AdminBaruComponent } from './admin-baru/admin-baru.component';
import { AdminIzinComponent } from './admin-izin/admin-izin.component';
import { AdminIzinSemuaComponent } from './admin-izinsemua/admin-izinsemua.component';
import { AdminPermitComponent } from './admin-permit/admin-permit.component';
import { AdminPermitSemuaComponent } from './admin-permitsemua/admin-permitsemua.component';
import { AdminBatalComponent } from './admin-batal/admin-batal.component';
import { AdminDitolakComponent } from './admin-ditolak/admin-ditolak.component';
import { AdminKIVComponent } from './admin-kiv/admin-kiv.component';
import { AdminMulaKerjaComponent } from './admin-mula-kerja/admin-mula-kerja.component';
import { AdminSiapKerjaComponent } from './admin-siap-kerja/admin-siap-kerja.component';
import { AdminWangCagaranComponent } from './admin-wang-cagaran/admin-wang-cagaran.component';
import { UserProfileComponent } from './userprofile/userprofile.component';
import { MaterialModule } from '../material.module';
import { CDKModule } from '../cdk.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AlertService, AuthenticationService, UserService } from '../_services/index';
import { FileUploadModule } from 'ng2-file-upload';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MatDialogModule, MatButtonModule } from '@angular/material';
import { PageNotFoundComponent } from '../pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    AdminSemuaComponent,
    AdminPermitComponent,
    AdminPermitSemuaComponent,
    AdminIzinComponent,
    AdminIzinSemuaComponent,
    AdminBaruComponent,
    UserProfileComponent,
    PageNotFoundComponent,
    AdminBatalComponent,
    AdminDitolakComponent,
    AdminKIVComponent,
    AdminMulaKerjaComponent,
    AdminSiapKerjaComponent,
    AdminWangCagaranComponent
  ],
  imports: [
    BrowserModule,
    AdminRoutingModule,
    AdminSidebarModule,
    NavbarModule,
    BrowserAnimationsModule,
    FooterModule,
    FixedPluginModule,
    MaterialModule,
    CDKModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FileUploadModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    MatDialogModule, MatButtonModule
  ],

  providers: [
    AlertService,
    AuthenticationService,
    UserService
  ],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
