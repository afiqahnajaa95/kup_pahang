import { Component, OnInit } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { Router, ActivatedRoute } from '@angular/router';

declare var $:any;

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
    { path: '#', title: 'Izin Lalu',  icon:'ti-pencil-alt', class: '' },
    { path: '#', title: 'Permit Kerja',  icon:'ti-hand-point-right', class: '' },
    { path: '#', title: 'Mula Kerja',  icon: 'ti-hand-point-right', class: '' },
    { path: '#', title: 'Siap Kerja',  icon:'ti-hand-point-right', class: '' },
    { path: '#', title: 'Wang Cagaran',  icon:'ti-money', class: '' },
    { path: '#', title: 'Ditangguhkan (KIV)',  icon:'ti-hand-point-right', class: '' },
    { path: '#', title: 'Batal',  icon:'ti-face-sad', class: '' },
    { path: '#', title: 'Ditolak',  icon:'ti-face-sad', class: '' },
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
    ){
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
    selected(path){
      console.log("Button Trigger: "+path);
      this.id = this.firebase.auth.currentUser;
      console.log(this.id.uid);
      if(path == 'login'){
        console.log("Logging Out");
        this.firebase.auth.signOut();
        this.router.navigate(['/login']);
      }else{
        this.router.navigate(['/'+path, { id: this.id.uid }]);
      }
    }
}
