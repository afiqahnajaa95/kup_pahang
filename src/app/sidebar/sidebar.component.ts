import { Component, OnInit } from '@angular/core';

declare var $:any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon: 'ti-panel', class: '' },
    { path: 'user', title: 'Pemohon',  icon:'ti-user', class: '' },
    { path: 'table', title: 'Semua',  icon:'ti-view-list-alt', class: '' },
    { path: 'typography', title: 'Permohonan Baru',  icon:'ti-text', class: '' },
    { path: 'icons', title: 'Izin Lalu',  icon:'ti-pencil-alt2', class: '' },
    // { path: 'maps', title: 'Maps',  icon:'ti-map', class: '' },
    { path: 'notifications', title: 'Permit Kerja',  icon:'ti-bell', class: '' },
    { path: '#', title: 'Mula Kerja',  icon: 'ti-panel', class: '' },
    { path: '#', title: 'Siap Kerja',  icon:'ti-user', class: '' },
    { path: '#', title: 'Wang Cagaran',  icon:'ti-view-list-alt', class: '' },
    { path: '#', title: 'Ditangguhkan (KIV)',  icon:'ti-text', class: '' },
    { path: '#', title: 'Batal',  icon:'ti-pencil-alt2', class: '' },
    // { path: 'maps', title: 'Maps',  icon:'ti-map', class: '' },
    { path: '#', title: 'Ditolak',  icon:'ti-bell', class: '' },
    // { path: 'upgrade', title: 'Upgrade to PRO',  icon:'ti-export', class: 'active-pro' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isNotMobileMenu(){
        if($(window).width() > 991){
            return false;
        }
        return true;
    }

}
