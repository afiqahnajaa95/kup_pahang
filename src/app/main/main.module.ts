import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../../environments/environment';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main.routing.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ProfileComponent, BatalFormComponent }   from './profile/profile.component';
import { IconsComponent }   from './icons/icons.component';
import { NotificationsComponent }   from './notifications/notifications.component';
import { MaterialModule } from '../material.module';
import { CDKModule } from '../cdk.module';
import { KupFormComponent }   from './kup-form/kup-form.component';
import { IzinLaluComponent }   from './izin-lalu/izin-lalu.component';
import { SemuaComponent }   from './semua/semua.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AlertService, AuthenticationService, UserService } from '../_services/index';
import { FileUploadModule } from 'ng2-file-upload';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MatDialogModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
    IconsComponent,
    NotificationsComponent,
    KupFormComponent,
    IzinLaluComponent,
    SemuaComponent,
    ProfileComponent,
    BatalFormComponent
  ],
  imports: [
    BrowserModule,
    MainRoutingModule,
    SidebarModule,
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
  exports: [
    DashboardComponent,
    IconsComponent,
    NotificationsComponent,
    KupFormComponent,
    IzinLaluComponent,
    SemuaComponent,
    ProfileComponent,
    BatalFormComponent
  ],
  providers: [
    AlertService,
    AuthenticationService,
    UserService
  ],
  bootstrap: [MainComponent],
  entryComponents: [BatalFormComponent]
})
export class MainModule { }
