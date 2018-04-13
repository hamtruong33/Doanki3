import { Routes, RouterModule } from '@angular/router';

import { HomeUserComponent } from './components/user-layout/homeuser/homeuser.component';
import { LoginuserComponent } from './components/user-layout/loginuser/loginuser.component';
import { RegisteruserComponent } from './components/user-layout/registeruser/registeruser.component';
import { CategorylistComponent } from './components/user-layout/categorylist/categorylist.component';
import { ProductinfoComponent } from './components/user-layout/productinfo/productinfo.component';
import { UserlayoutComponent } from './layout/userlayout/userlayout.component';
import { AdminlayoutComponent } from './layout/adminlayout/adminlayout.component';
import { HomadminComponent } from './components/admin/homadmin/homadmin.component';

const routes: Routes = [
    {
        path: '', component: UserlayoutComponent, children: [
            { path: 'home', component: HomeUserComponent },
            { path: 'register', component: RegisteruserComponent },
            { path: 'login', component: LoginuserComponent },
            { path: 'category', component: CategorylistComponent },
            { path: 'productinfo', component: ProductinfoComponent },]
    },
    {
        path: 'admin', component: AdminlayoutComponent, children: [
            { path: 'home', component: HomadminComponent },
        ]
    }


];

export const routing = RouterModule.forRoot(routes);