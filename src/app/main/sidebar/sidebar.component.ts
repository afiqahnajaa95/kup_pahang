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
    // icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard', class: 'drop' },
    { path: 'dashboard', title: 'Pemohon', class: '' },
    { path: 'semua', title: 'Semua', class: '' },
    { path: 'kupform', title: 'Permohonan Baru', class: '' },
    { path: 'izinlalu', title: 'Izin Lalu', class: '' },
    { path: '#', title: 'Permit Kerja', class: '' },
    { path: '#', title: 'Mula Kerja', class: '' },
    { path: '#', title: 'Siap Kerja', class: '' },
    { path: '#', title: 'Wang Cagaran', class: '' },
    { path: '#', title: 'Ditangguhkan (KIV)', class: '' },
    { path: '#', title: 'Batal', class: '' },
    { path: '#', title: 'Ditolak', class: '' },
    // { path: 'login', title: 'Login',  icon:'ti-hand-point-right', class: '' },
    // { path: 'register', title: 'Register',  icon:'ti-hand-point-right', class: '' },
    { path: 'login', title: 'Logout', class: '' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    id: any;
    email: string = 'email';
    name: string = 'name';
    private itemDoc: AngularFirestoreDocument<Item>;
    items: Observable<Item>;
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
    logOut(){
      console.log("Logging Out");
      this.firebase.auth.signOut();
      this.router.navigate(['/login']);
    }
}
