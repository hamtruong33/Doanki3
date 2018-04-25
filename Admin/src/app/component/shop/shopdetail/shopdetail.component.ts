import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../../services/shop.service';
import { ActivatedRoute, Router } from '@angular/router';
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
    private productservice: ProductService,
    private router: Router
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
  ok(): void {
    var result = confirm('Are u sure ?');
    if (result) {
      this.shop.shop_active = true;
      this.shop.id_account=localStorage.getItem('idaccount');
      this.shopservice.update(this.shop).subscribe(
        data => {
          this.router.navigate(['list-shop']);
        },
        error => {
          alert('Error');
        }
      );
    }
  }
  unlock(): void {
    var result = confirm('Are u sure ?');
    if (result) {
      this.shop.status = true;
     // this.shop.id_account=localStorage.getItem('idaccount');
      this.shopservice.update(this.shop).subscribe(
        data => {
          this.router.navigate(['list-shop']);
        },
        error => {
          alert('Error');
        }
      );
    }
  }
  cancel(): void {
    var result = confirm('Are u sure ?');
    if (result) {
      this.shop.status = false;
      this.shopservice.update(this.shop).subscribe(
        data => {
          this.router.navigate(['list-shop']);
        },
        error => {
          alert('Error');
        }
      );
    }
  }
  delete(id: string) {
    var result = confirm('Are u sure ?');
    if (result) {
      this.shopservice.delete(id).subscribe(
        res => {
          alert('success');
          this.router.navigate(['list-shop']);
        },
        error => {
          alert('Error');
        }
      );

    }

  }

}
