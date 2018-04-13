import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeUserComponent } from './components/user-layout/homeuser/homeuser.component';
import { LoginuserComponent } from './components/user-layout/loginuser/loginuser.component';
import { RegisteruserComponent } from './components/user-layout/registeruser/registeruser.component';
import { ProductinfoComponent } from './components/user-layout/productinfo/productinfo.component';
import { NewblockproductComponent } from './components/block-layout/newblockproduct/newblockproduct.component';
import { ProductforshopComponent } from './components/block-layout/productforshop/productforshop.component';
import { CategorylistComponent } from './components/user-layout/categorylist/categorylist.component';
import { DealblockproductComponent } from './components/block-layout/dealblockproduct/dealblockproduct.component';
import {ModuledealsComponent} from './components/block-layout/moduledeals/moduledeals.component';
import { ProducttocategoryComponent } from './components/block-layout/producttocategory/producttocategory.component'
import { UserlayoutComponent } from './layout/userlayout/userlayout.component';
import { AdminlayoutComponent } from './layout/adminlayout/adminlayout.component';
import { HomadminComponent } from './components/admin/homadmin/homadmin.component';

import {routing} from './app.routing'

import {UserService} from './services/user.service';
import {HomeGuard} from './services/userguard.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeUserComponent,
    LoginuserComponent,
    RegisteruserComponent,
    ProductinfoComponent,
    NewblockproductComponent,
    ProductforshopComponent,
    CategorylistComponent,
    DealblockproductComponent,
    ModuledealsComponent,
    ProducttocategoryComponent,
    UserlayoutComponent,
    AdminlayoutComponent,
    HomadminComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    routing
  ],
  providers: [
    UserService,
    HomeGuard
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }