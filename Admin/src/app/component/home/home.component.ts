import { Component, OnInit } from '@angular/core';
import { error } from 'util';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ProductService } from '../../services/product.service';
import { Product } from '../../entities/product.entity';
import { UserService } from '../../services/user.service';
import { ShopService } from '../../services/shop.service';

@Component({

    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
    products :Product[];
    userregister:any;
    allshop:any;
    countproduct:any;
    constructor(
        private productservice :ProductService,
        private userservice :UserService,
        private shopservice: ShopService
    ) { }
    ngOnInit() {
        this.loaddata();
    }
    loaddata() {

        this.userservice.count().subscribe(
            res=>{
                this.userregister=res;
            },
            error=>{
                console.log(error);
            }
        );
        this.shopservice.count().subscribe(
            res=>{
                this.allshop=res;
            },
            error=>{
                console.log(error);
            }
        );
        this.productservice.count().subscribe(
            res=>{
                this.countproduct=res;
            },
            error=>{
                console.log(error);
            }
        );
        this.productservice.findByStatus().subscribe(
            res=>{
                this.products=res;
            },
            error=>{
                console.log(error);
            }
        );
        // this.productservice.findByStatus().subscribe(// khi xu ly xong ham subscribe cho biet se xu ly the nao 
        //   res => {//neu thanh cong 
        //     this.products = res;
        //   },
        //   error => {// neu that bai
        //     console.log(error);
        //   }
        // );
      }



}
