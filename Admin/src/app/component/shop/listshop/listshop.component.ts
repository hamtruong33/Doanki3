import { Component, OnInit } from '@angular/core';
import { error } from 'util';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Shop } from '../../../entities/shop.entity';
import { ShopService } from '../../../services/shop.service';
@Component({
  selector: 'app-listshop',
  templateUrl: './listshop.component.html',
  styleUrls: ['./listshop.component.css']
})
export class ListshopComponent implements OnInit {
  shops :Shop[];
  constructor(
    private shopservice :ShopService
  ) { }

  ngOnInit() {
    this.loaddata();
  }
  loaddata() {
    this.shopservice.findAll().subscribe(// khi xu ly xong ham subscribe cho biet se xu ly the nao 
      res => {//neu thanh cong 
        this.shops = res;
      },
      error => {// neu that bai
        console.log(error);
      }
    );
  }

}
