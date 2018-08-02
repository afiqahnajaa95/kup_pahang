import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing.module';
import { MainRoutingModule } from './main/main.routing.module';
import { MainModule } from './main/main.module';
import { AdminModule } from './admin/admin.module';
import { UpgradeComponent }   from './upgrade/upgrade.component';
import { MaterialModule } from './material.module';
import { CDKModule } from './cdk.module';
import { KupLoginComponent }   from './kup-login/kup-login.component';
import { KupSignupComponent }   from './kup-signup/kup-signup.component';
import { KupRegisterComponent }   from './kup-register/kup-register.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { FileUploadModule } from 'ng2-file-upload';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MatDialogModule, MatButtonModule, MatGridListModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    UpgradeComponent,
    KupLoginComponent,
    KupSignupComponent,
    KupRegisterComponent,
    AdminLoginComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    BrowserAnimationsModule,
    MaterialModule,
    CDKModule,
    FormsModule,
    MainModule,
    AdminModule,
    ReactiveFormsModule,
    HttpClientModule,
    FileUploadModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    MatDialogModule, MatButtonModule, MatGridListModule
  ],
  providers: [
    AlertService,
    AuthenticationService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
