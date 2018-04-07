import { Component, OnInit } from '@angular/core';
import { Account } from '../../../entities/account.entity';
import { AccountService } from '../../../services/account.service';
import { error } from 'util';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
@Component({
  selector: 'app-listuser',
  templateUrl: './listaccount.component.html'

})
export class ListAccountComponent implements OnInit {
  accounts: Account[];

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.loaddata();
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
