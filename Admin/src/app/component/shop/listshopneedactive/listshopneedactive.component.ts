import { Component, OnInit } from '@angular/core';
import { ListShop } from '../../../entities/listshop.entity';
import { ShopService } from '../../../services/shop.service';
import { Shop } from '../../../entities/shop.entity';
declare const $;
window['$'] = window['jQuery'] = $;
@Component({
  selector: 'app-listshopneedactive',
  templateUrl: './listshopneedactive.component.html',
  styleUrls: ['./listshopneedactive.component.css']
})
export class ListshopneedactiveComponent implements OnInit {
  listshops:ListShop[];
  shops:Shop[];
  constructor(
    private shopservice :ShopService,
  ) { 
    $(function () {
      $('#example1').DataTable()
      $('#example2').DataTable({
        'paging'      : true,
        'lengthChange': true,
        'searching'   : true,
        'ordering'    : true,
        'info'        : true,
        'autoWidth'   : true
      })
    })
  }

  ngOnInit() {
    this.loaddata();
  }
  loaddata() {
    this.shopservice.verifyshop().subscribe(// khi xu ly xong ham subscribe cho biet se xu ly the nao 
      res => {//neu thanh cong 
        this.shops=res;
       console.log(res);

      },
      error => {// neu that bai
        console.log(error);
      }
    );
  }

}
