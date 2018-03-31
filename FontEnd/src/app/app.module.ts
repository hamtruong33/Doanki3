import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import{routing} from './app.routing';

import { TemplateComponent }  from './template.component';
import { HeaderComponent }    from './components/user-layout/block-layout/header/header.component';
import { FooterComponent }    from './components/user-layout/block-layout/footer/footer.component';
import { MegamenuComponent }  from './components/user-layout/block-layout/megamenu/megamenu.component';
import { TestComponent } from './components/user-layout/block-layout/test/test.component';
import { SlideshowComponent } from './components/user-layout/block-layout/slideshow/slideshow.component';
import { ModuledealsComponent } from './components/user-layout/block-layout/moduledeals/moduledeals.component';
import { Modulecatelory1Component } from './components/user-layout/block-layout/modulecatelory1/modulecatelory1.component';
import { HomeComponent } from './components/user-layout/home/home.component';
import { ProductInfoComponent } from './components/user-layout/product-info/product-info.component';
import { BestsellerComponent } from './components/user-layout/block-layout/bestseller/bestseller.component';
import { templateJitUrl } from '@angular/compiler';



@NgModule({
  declarations: [
    
    TemplateComponent,
    
    HeaderComponent,
    
    FooterComponent,
    
    MegamenuComponent,
    
    TestComponent,
    
    SlideshowComponent,
    
    ModuledealsComponent,
    
    Modulecatelory1Component,
    
    HomeComponent,
    
    ProductInfoComponent,
    
    BestsellerComponent,
    
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
  ],  
  bootstrap: [TemplateComponent]
})

export class AppModule { }