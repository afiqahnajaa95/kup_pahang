import { Component, OnInit } from '@angular/core';
import { MatMenuModule} from '@angular/material/menu';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { Router, ActivatedRoute } from '@angular/router';

declare var $:any;

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

    constructor(
      public firebase: AngularFireAuth,
      private route: ActivatedRoute,
      private router: Router,
    ){}
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
      this.id = this.firebase.auth.currentUser;
      console.log(this.id.uid);
      this.router.navigate([path, { id: this.id.uid }]);
    }
    logOut(){
      console.log("Logging Out");
      this.id = this.firebase.auth.currentUser;
      console.log(this.id.uid);
      this.firebase.auth.signOut();
      this.router.navigate(['/login']);
    }
}
