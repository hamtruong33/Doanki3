import { Component, OnInit } from '@angular/core';
import { error } from 'util';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Shop } from '../../../entities/shop.entity';
import { ShopService } from '../../../services/shop.service';
import { UserService } from '../../../services/user.service';
import { User } from '../../../entities/user.entity';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ListShop } from '../../../entities/listshop.entity';

declare const $;
window['$'] = window['jQuery'] = $;
@Component({
  selector: 'app-listshop',
  templateUrl: './listshop.component.html',
  styleUrls: ['./listshop.component.css']
})
export class ListshopComponent implements OnInit {
  listshops:ListShop[];
  shops:Shop[];
  constructor(
    private shopservice :ShopService,
    private userservice :UserService
    
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
  ngAfterViewInit(){
  
  }
  loaddata() {
    this.shopservice.findbyuser().subscribe(// khi xu ly xong ham subscribe cho biet se xu ly the nao 
      res => {//neu thanh cong 
        this.shops=res;
       

      },
      error => {// neu that bai
        console.log(error);
      }
    );
  }
 
  delete(id: string) {
    var result = confirm('Are u sure ?');
    if (result) {
      this.shopservice.delete(id).subscribe(
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
