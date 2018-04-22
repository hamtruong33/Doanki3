import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { TemplateComponent } from './template.component';
import { LoginComponent } from './component/account/login/login.component';
import { AccountService } from './services/account.service';
import { AuthGuard } from './services/auth.guard';
import { ListAccountComponent } from './component/account/listaccount/listaccount.component';
import { ProductdetailComponent } from './component/product/productdetail/productdetail.component';
import { ListshopComponent } from './component/shop/listshop/listshop.component';
import { ListproductComponent } from './component/product/listproduct/listproduct.component';
import { ShopdetailComponent } from './component/shop/shopdetail/shopdetail.component';
import { ListuserComponent } from './component/user/listuser/listuser.component';
import { UserdetailComponent } from './component/user/userdetail/userdetail.component';
import { ListorderComponent } from './component/order/listorder/listorder.component';

const routes: Routes = [


    { path: '', component: HomeComponent },
    { path: 'list-account', component: ListAccountComponent },
    { path: 'productdetail', component: ProductdetailComponent },
    { path: 'list-shop', component: ListshopComponent },
    { path: 'listproduct', component: ListproductComponent },
    { path: 'shopdetail', component: ShopdetailComponent },
    { path: 'listuser', component: ListuserComponent },
    { path: 'userdetail',component:UserdetailComponent },
    { path: 'listorder',component:ListorderComponent },
    { path: 'home', component: HomeComponent },
    { path: '**', component: HomeComponent },

    /// '**' tuong duong voi ko co duong dan nao giong nhu tren 

];

export const routing = RouterModule.forRoot(routes);