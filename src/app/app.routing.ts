import { Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { TableComponent }   from './table/table.component';
import { TypographyComponent }   from './typography/typography.component';
import { IconsComponent }   from './icons/icons.component';
import { NotificationsComponent }   from './notifications/notifications.component';
import { UpgradeComponent }   from './upgrade/upgrade.component';
import { KupFormComponent }   from './kup-form/kup-form.component';
import { KupLoginComponent }   from './kup-login/kup-login.component';
import { KupSignupComponent }   from './kup-signup/kup-signup.component';
import { KupRegisterComponent }   from './kup-register/kup-register.component';
import { IzinLaluComponent }   from './izin-lalu/izin-lalu.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'table',
        component: TableComponent
    },
    {
        path: 'typography',
        component: TypographyComponent
    },
    {
        path: 'icons',
        component: IconsComponent
    },
    {
        path: 'notifications',
        component: NotificationsComponent
    },
    {
        path: 'upgrade',
        component: UpgradeComponent
    },
    {
        path: 'kupform',
        component: KupFormComponent
    },
    {
        path: 'login',
        component: KupLoginComponent
    },
    {
        path: 'signup',
        component: KupSignupComponent
    },
    {
        path: 'register',
        component: KupRegisterComponent
    },
    {
        path: 'izinlalu',
        component: IzinLaluComponent
    }
]
