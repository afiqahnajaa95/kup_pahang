import { Component, OnInit } from '@angular/core';
import { MatMenuModule} from '@angular/material/menu';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

declare var $:any;

export interface Item { email: string, req_name: string}

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon: 'ti-panel', class: '' },
    { path: '#', title: 'Pemohon',  icon:'ti-user', class: '' },
    { path: 'icons', title: 'Semua',  icon:'ti-notepad', class: '' },
    { path: 'kupform', title: 'Permohonan Baru',  icon:'ti-pencil-alt', class: '' },
    { path: 'izinlalu', title: 'Izin Lalu',  icon:'ti-pencil-alt', class: '' },
    { path: '#', title: 'Permit Kerja',  icon:'ti-hand-point-right', class: '' },
    { path: '#', title: 'Mula Kerja',  icon: 'ti-hand-point-right', class: '' },
    { path: '#', title: 'Siap Kerja',  icon:'ti-hand-point-right', class: '' },
    { path: '#', title: 'Wang Cagaran',  icon:'ti-money', class: '' },
    { path: '#', title: 'Ditangguhkan (KIV)',  icon:'ti-hand-point-right', class: '' },
    { path: '#', title: 'Batal',  icon:'ti-face-sad', class: '' },
    { path: '#', title: 'Ditolak',  icon:'ti-face-sad', class: '' },
    // { path: 'login', title: 'Login',  icon:'ti-hand-point-right', class: '' },
    // { path: 'register', title: 'Register',  icon:'ti-hand-point-right', class: '' },
    { path: 'login', title: 'Logout',  icon:'ti-hand-point-right', class: '' },
];

@Component({
    moduleId: module.id,
    selector: 'admin-sidebar',
    templateUrl: 'admin-sidebar.component.html',
})

export class AdminSidebarComponent implements OnInit {
    public menuItems: any[];
    id: any;
    name: any;
    email: any;
    private itemDoc: AngularFirestoreDocument<Item>;

    constructor(
      public firebase: AngularFireAuth,
      private route: ActivatedRoute,
      private router: Router,
      private db: AngularFirestore
    ){
      this.id = this.firebase.auth.currentUser;
      console.log(this.id.uid);
      this.itemDoc = db.doc<Item>('users/'+this.id.uid);
      this.itemDoc.valueChanges().subscribe((result) =>{
        console.log(result.email);
        this.name = result.req_name;
        this.email = result.email;
      });
    }
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isNotMobileMenu(){
        if($(window).width() > 991){
            return false;
        }
        return true;
    }
    redirectTo(path){
      console.log(path);
      this.router.navigate([path, { id: this.id.uid }]);
    }
    editProfile(){
      console.log("Opening profile");
      this.router.navigate(['/profile', { id: this.id.uid }]);
    }
    logOut(){
      console.log("Logging Out");
      this.firebase.auth.signOut();
      this.router.navigate(['/login']);
    }
}
