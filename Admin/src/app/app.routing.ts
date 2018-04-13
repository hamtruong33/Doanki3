import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutUsComponent } from './component/aboutus/aboutus.component';
import { NewsComponent } from './component/news/news.component';
import { TemplateComponent } from './template.component';
import { LoginComponent } from './component/account/login/login.component';
import { AccountService } from './services/account.service';
import { AuthGuard } from './services/auth.guard';
import { ListAccountComponent } from './component/account/listaccount/listaccount.component';
import { HomelayoutComponent } from './layout/homelayout/homelayout.component';
import { LoginlayoutComponent } from './layout/loginlayout/loginlayout.component';

const routes: Routes = [
    {
        path: '', component: HomelayoutComponent, children: [
            { path: '', component: HomeComponent },
            { path: 'list-account', component: ListAccountComponent },]
    },
    {
        path: '', component: LoginlayoutComponent, children: [
            { path: 'login', component: LoginComponent }]
    },
    //{ path: 'home', component: HomeComponent },
    { path: 'aboutus', component: AboutUsComponent },
    { path: 'news', component: NewsComponent },

    //{ path: 'list-account', component: ListAccountComponent },
    { path: '**', component: HomeComponent },

    /// '**' tuong duong voi ko co duong dan nao giong nhu tren 

];

export const routing = RouterModule.forRoot(routes);