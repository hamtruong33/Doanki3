import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';



import { MathService } from './services/math.service';
import { CalculatorService } from './services/Calculator.service';
import { AccountService } from './services/account.service';
import { AuthGuard } from './services/auth.guard';
import { ProductService } from './services/product.service';
import { ProductPhotoService } from './services/productphoto.service';
import { ShopService } from './services/shop.service';



import { HomeComponent } from './component/home/home.component';
import { AboutUsComponent } from './component/aboutus/aboutus.component';
import { NewsComponent } from './component/news/news.component';
import { TemplateComponent } from './template.component';
import { AppheaderComponent } from './component/appheader/appheader.component';
import { AppfooterComponent } from './component/appfooter/appfooter.component';
import { AppmenuComponent } from './component/appmenu/appmenu.component';
import { AppsettingComponent } from './component/appsetting/appsetting.component';
import { LoginComponent } from './component/account/login/login.component';
import { ListAccountComponent } from './component/account/listaccount/listaccount.component';
import { HomelayoutComponent } from './layout/homelayout/homelayout.component';
import { LoginlayoutComponent } from './layout/loginlayout/loginlayout.component';
import { DuyetproductComponent } from './component/product/duyetproduct/duyetproduct.component';
import { ProductdetailComponent } from './component/product/productdetail/productdetail.component';
import { ListshopComponent } from './component/shop/listshop/listshop.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent,
    NewsComponent,
    TemplateComponent,
    AppheaderComponent,
    AppfooterComponent,
    AppmenuComponent,
    AppsettingComponent,
    LoginComponent,
    ListAccountComponent,
    HomelayoutComponent,
    LoginlayoutComponent,
    DuyetproductComponent,
    ProductdetailComponent,
    ListshopComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    HttpModule

  ],
  providers: [
    MathService,
    CalculatorService,
    AccountService,
    AuthGuard,
    ProductService,
    ProductPhotoService,
    ShopService
    
  ],
  bootstrap: [TemplateComponent]// chi ra component nao chay dau tien 
})

export class AppModule { }