import { Component, OnInit, ElementRef } from '@angular/core';
import { Product } from '../../../entities/product.entity';
import { ProductService } from '../../../services/product.service';
import { ListProduct } from '../../../entities/listproduct.entity';
declare const $;
window['$'] = window['jQuery'] = $;
@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit {
  products: Product[];
  listproduct:ListProduct[];
  constructor(
    private productservice: ProductService,
    private elementRef: ElementRef

  ) {
 
   
  }

  ngOnInit() {
    this.loaddata();
    
  }
  ngAfterViewInit() {
    $(function () {
      $('#example1').DataTable()
      $('#example2').DataTable({
        'paging': true,
        'lengthChange': true,
        'searching': true,
        'ordering': true,
        'info': true,
        'autoWidth': true
      })
    })
  }
  loaddata() {
    this.productservice.findByShopName().subscribe(// khi xu ly xong ham subscribe cho biet se xu ly the nao 
      res => {//neu thanh cong 
        this.products = res;

      },
      error => {// neu that bai
        console.log(error);
      }
    );
  }
  delete(id: string) {
    var result = confirm('Are u sure ?');
    if (result) {
      this.productservice.delete(id).subscribe(
        res => {
          alert('success');
          this.loaddata();
        },
        error => {
          alert('Error');
        }
      );

    }

  }

}
