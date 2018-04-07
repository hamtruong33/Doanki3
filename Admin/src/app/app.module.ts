import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {routing} from './app.routing';

import {MathService } from'./services/math.service';
import {CalculatorService } from'./services/Calculator.service';
import {AccountService} from './services/account.service'
import {AuthGuard} from './services/auth.guard'

import { AppComponent } from './app.component';
import {HomeComponent} from './component/home/home.component';
import {AboutUsComponent} from './component/aboutus/aboutus.component';
import {NewsComponent} from './component/news/news.component';
import {TemplateComponent} from './template.component';
import { AppheaderComponent } from './component/appheader/appheader.component';
import { AppfooterComponent } from './component/appfooter/appfooter.component';
import { AppmenuComponent } from './component/appmenu/appmenu.component';
import { AppsettingComponent } from './component/appsetting/appsetting.component';
import { LoginComponent } from './component/account/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    NewsComponent,
    TemplateComponent,
    AppheaderComponent,
    AppfooterComponent,
    AppmenuComponent,
    AppsettingComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing

  ],
  providers: [
    MathService,
    CalculatorService,
    AccountService,
    AuthGuard
  ],
  bootstrap: [TemplateComponent]// chi ra component nao chay dau tien 
})

export class AppModule { }