import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';



import { AccountService } from './services/account.service';
import { AuthGuard } from './services/auth.guard';
import { ProductService } from './services/product.service';
import { ProductPhotoService } from './services/productphoto.service';
import { ShopService } from './services/shop.service';
import { UserService } from './services/user.service';




import { HomeComponent } from './component/home/home.component';
import { TemplateComponent } from './template.component';
import { LoginComponent } from './component/account/login/login.component';
import { ListAccountComponent } from './component/account/listaccount/listaccount.component';
import { ProductdetailComponent } from './component/product/productdetail/productdetail.component';
import { ListshopComponent } from './component/shop/listshop/listshop.component';
import { ShopdetailComponent } from './component/shop/shopdetail/shopdetail.component';
import { ListproductComponent } from './component/product/listproduct/listproduct.component';
import { ListuserComponent } from './component/user/listuser/listuser.component';
import { UserdetailComponent } from './component/user/userdetail/userdetail.component';
import { ListorderComponent } from './component/order/listorder/listorder.component';
import { AppComponent } from './app.component';
import { LoginTemplateComponent } from './logintemplate.component';
import { AddaccountComponent } from './component/account/addaccount/addaccount.component';
import { AddshopComponent } from './component/shop/addshop/addshop.component';
import { AddproductComponent } from './component/product/addproduct/addproduct.component';


@NgModule({
  declarations: [
    HomeComponent,
    TemplateComponent,
    LoginComponent,
    ListAccountComponent,
    ProductdetailComponent,
    ListshopComponent,
    ShopdetailComponent,
    ListproductComponent,
    ListuserComponent,
    UserdetailComponent,
    ListorderComponent,
    AppComponent,
    LoginTemplateComponent,
    AddaccountComponent,
    AddshopComponent,
    AddproductComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    HttpModule,
    HttpClientModule

  ],
  providers: [
    AccountService,
    AuthGuard,
    ProductService,
    ProductPhotoService,
    ShopService,
    UserService
    
  ],
  bootstrap: [AppComponent]// chi ra component nao chay dau tien 
})

export class AppModule { }