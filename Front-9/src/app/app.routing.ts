import { Routes, RouterModule } from '@angular/router';

import { HomeUserComponent } from './components/user-layout/homeuser/homeuser.component';
import { LoginuserComponent } from './components/user-layout/loginuser/loginuser.component';
import { RegisteruserComponent } from './components/user-layout/registeruser/registeruser.component';
import { CategorylistComponent } from './components/user-layout/categorylist/categorylist.component';
import { ProductinfoComponent } from './components/user-layout/productinfo/productinfo.component';

const routes: Routes = [
    {path:'', component:HomeUserComponent},
    {path:'home', component:HomeUserComponent},
    {path:'register', component:RegisteruserComponent},
    {path:'login', component:LoginuserComponent},
    {path:'category', component:CategorylistComponent},
    {path:'productinfo', component:ProductinfoComponent},
   
];

export const routing = RouterModule.forRoot(routes);