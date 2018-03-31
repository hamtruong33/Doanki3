import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/user-layout/home/home.component';
import { ProductInfoComponent } from './components/user-layout/product-info/product-info.component';
const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'product', component: HomeComponent },
];

export const routing = RouterModule.forRoot(routes);