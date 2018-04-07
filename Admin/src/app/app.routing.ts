import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutUsComponent } from './component/aboutus/aboutus.component';
import { NewsComponent } from './component/news/news.component';
import { AppComponent } from './app.component';
import { TemplateComponent } from './template.component';
import { LoginComponent } from './component/account/login/login.component';
import { AccountService } from './services/account.service';
import { AuthGuard } from './services/auth.guard';
import { ListAccountComponent } from './component/account/listaccount/listaccount.component';


const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'aboutus', component: AboutUsComponent },
    { path: 'news', component: NewsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'list-account', component: ListAccountComponent },
    { path: '**', component: LoginComponent },

    /// '**' tuong duong voi ko co duong dan nao giong nhu tren 

];

export const routing = RouterModule.forRoot(routes);