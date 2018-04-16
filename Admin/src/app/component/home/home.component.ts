import { Component, OnInit } from '@angular/core';
import { error } from 'util';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ProductService } from '../../services/product.service';
import { Product } from '../../entities/product.entity';

@Component({

    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
    products :Product[];


    constructor(
        private productservice :ProductService
    ) { }
    ngOnInit() {
        this.loaddata();
    }
    loaddata() {
        this.productservice.findByStatus().subscribe(// khi xu ly xong ham subscribe cho biet se xu ly the nao 
          res => {//neu thanh cong 
            this.products = res;
          },
          error => {// neu that bai
            console.log(error);
          }
        );
      }



}
