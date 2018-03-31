import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule ,ReactiveFormsModule} from '@angular/forms';

import {MathService } from'./services/math.service';
import {CalculatorService } from'./services/Calculator.service';

import {EventComponent} from './event.component';
import { AppComponent } from './app.component';
import {DataBindingComponent} from './databinding.component';
import {DemoServicesComponent} from './demoservices.component';
import {AccountComponent} from './account.component';
import {HomeComponent} from './component/home/home.component';
import {AboutUsComponent} from './component/aboutus/aboutus.component';
import {NewsComponent} from './component/news/news.component';
import {TemplateComponent} from './template.component';
import {LoginComponent} from './component/account/login/login.component';

import {routing} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    DataBindingComponent,
    DemoServicesComponent,
    AccountComponent,
    HomeComponent,
    AboutUsComponent,
    NewsComponent,
    TemplateComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing

  ],
  providers: [
    MathService,
    CalculatorService
  ],
  bootstrap: [TemplateComponent]// chi ra component nao chay dau tien 
})

export class AppModule { }