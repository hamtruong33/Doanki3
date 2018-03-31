import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {AboutUsComponent} from './component/aboutus/aboutus.component';
import {NewsComponent} from './component/news/news.component';
import {LoginComponent} from './component/account/login/login.component';

const routes: Routes = [
    {path: '',component: HomeComponent},
    {path: 'login',component: LoginComponent},
    {path:'home',component:HomeComponent},
    {path:'aboutus',component:AboutUsComponent},
    {path:'news',component:NewsComponent},
    { path:'**',component:HomeComponent} // '**' tuong duong voi ko co duong dan nao giong nhu tren 

];

export const routing = RouterModule.forRoot(routes);