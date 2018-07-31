import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing.module';
// import { SidebarModule } from './sidebar/sidebar.module';
// import { FooterModule } from './shared/footer/footer.module';
// import { NavbarModule} from './shared/navbar/navbar.module';
// import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
// import { DashboardComponent }   from './dashboard/dashboard.component';
// import { TableComponent }   from './table/table.component';
// import { TypographyComponent }   from './typography/typography.component';
// import { IconsComponent }   from './icons/icons.component';
// import { NotificationsComponent }   from './notifications/notifications.component';
import { UpgradeComponent }   from './upgrade/upgrade.component';
import { MaterialModule } from './material.module';
import { CDKModule } from './cdk.module';
// import { KupFormComponent }   from './kup-form/kup-form.component';
import { KupLoginComponent }   from './kup-login/kup-login.component';
import { KupSignupComponent }   from './kup-signup/kup-signup.component';
import { KupRegisterComponent }   from './kup-register/kup-register.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { SidebarComponent } from './main/sidebar/sidebar.component';
// import { IzinLaluComponent }   from './izin-lalu/izin-lalu.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { FileUploadModule } from 'ng2-file-upload';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MatDialogModule, MatButtonModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    // DashboardComponent,
    // TableComponent,
    // TypographyComponent,
    // IconsComponent,
    // NotificationsComponent,
    UpgradeComponent,
    // KupFormComponent,
    KupLoginComponent,
    KupSignupComponent,
    KupRegisterComponent,
    DashboardComponent,
    SidebarComponent,
    // IzinLaluComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    // SidebarModule,
    // NavbarModule,
    BrowserAnimationsModule,
    // FooterModule,
    // FixedPluginModule,
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
  entryComponents: [KupLoginComponent],
  providers: [
    AlertService,
    AuthenticationService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
