import { Component, OnInit } from '@angular/core';
import { error } from 'util';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Product } from '../../../entities/product.entity';
import { ProductService } from '../../../services/product.service';



@Component({
  selector: 'app-duyetproduct',
  templateUrl: './duyetproduct.component.html',
  styleUrls: ['./duyetproduct.component.css']
})
export class DuyetproductComponent implements OnInit {
  products :Product[];
  constructor(
    private productservice :ProductService,
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
