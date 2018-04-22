import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../../services/shop.service';
import { ActivatedRoute } from '@angular/router';
import { Shop } from '../../../entities/shop.entity';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../entities/product.entity';

@Component({
  selector: 'app-shopdetail',
  templateUrl: './shopdetail.component.html',
  styleUrls: ['./shopdetail.component.css']
})
export class ShopdetailComponent implements OnInit {
  shop: Shop;
  shopstatus: string;
  products: Product[];
  constructor(
    private shopservice: ShopService,
    private activatedRoute: ActivatedRoute,
    private productservice: ProductService
  ) { }

  ngOnInit() {
    let params: any = this.activatedRoute.snapshot.params;
    this.shopservice.findById(params.id).subscribe(
      res => {
        this.shop = res;
        if (this.shop.status) {
          this.shopstatus = "Dang hoat dong";
        } else {
          this.shopstatus = "Dang bi khoa";
        }
        this.productservice.findByShop(params.id).subscribe(
          res => {
            this.products = res;
          },
          error => {
            console.log(error);
          }
        );
      },
      error => {
        console.log(error);
      }

    );
  }

}
