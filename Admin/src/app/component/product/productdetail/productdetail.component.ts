import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../entities/product.entity';
import { ProductPhotoService } from '../../../services/productphoto.service';
import { ProductPhoto } from '../../../entities/productphoto.entity';
import { ShopService } from '../../../services/shop.service';
import { Shop } from '../../../entities/shop.entity';
@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  shopstatus:string;
  product: Product;
  productphoto: ProductPhoto;
  shop: Shop;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productservice: ProductService,
    private productphotoservice: ProductPhotoService,
    private shopservice: ShopService,
    private router: Router,
  ) { }

  ngOnInit() {
    let params: any = this.activatedRoute.snapshot.params;
    this.productservice.findById(params.id).subscribe(
      res => {
        this.product = res;
        this.productphotoservice.findByProduct(params.id).subscribe(
          res => {
            this.productphoto = res;
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
  
  ok():void{
    this.product.status=true;
    this.productservice.update(this.product).subscribe(
      data => {
        this.router.navigate(['verifyproduct']);
      },
      error => {
          alert('Error');
      }
    );
  }
  cancel(): void {
    var result = confirm('Are u sure ?');
    if (result) {
      this.product.status = false;
      this.productservice.update(this.product).subscribe(
        data => {
          this.router.navigate(['verifyproduct']);
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
      this.productservice.delete(id).subscribe(
        res => {
          alert('success');
          this.router.navigate(['verifyproduct']);
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
      this.product.status = true;
     // this.shop.id_account=localStorage.getItem('idaccount');
      this.productservice.update(this.product).subscribe(
        data => {
          this.router.navigate(['verifyproduct']);
        },
        error => {
          alert('Error');
        }
      );
    }
  }


}
