import { Component, OnInit } from '@angular/core';
import { Account } from '../../../entities/account.entity';
import { AccountService } from '../../../services/account.service';
import { error } from 'util';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
declare const $;
window['$'] = window['jQuery'] = $;
@Component({
  selector: 'app-listuser',
  templateUrl: './listaccount.component.html'

})
export class ListAccountComponent implements OnInit {
  accounts: Account[];

  constructor(
    private accountService: AccountService
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
    this.accountService.findAll().subscribe(// khi xu ly xong ham subscribe cho biet se xu ly the nao 
      res => {//neu thanh cong 
        this.accounts = res;
      },
      error => {// neu that bai
        console.log(error);
      }
    );
  }
  delete(id: string) {
    var result = confirm('Are u sure ?');
    if (result) {
      this.accountService.delete(id).subscribe(
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
