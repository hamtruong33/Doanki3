import { Component, OnInit } from '@angular/core';
import { AccountService } from './services/account.service';
import { AuthGuard } from './services/auth.guard';
import {Account} from './entities/account.entity';


@Component({
    selector: 'app-root',
    templateUrl: 'template.component.html'
})

export class TemplateComponent implements OnInit {
    account :Account;
    id:string;
    loaded :boolean =false;
    constructor(
        private accountservice: AccountService
    ) { }
    ngOnInit() { 
        console.log(localStorage.getItem('idaccount'));
        this.id=localStorage.getItem('idaccount');
        this.accountservice.findById(this.id).subscribe(
            res=>{
                this.account=res;
                this.loaded=true;
              
            },
            error => {
              console.log(error)
            }
        );
       // if(!localStorage.getItem('idaccount')){
       //     this.accountservice.redirectUrl ='/login';
      //  }
    }
    onLogout() {
        this.accountservice.logout();
        localStorage.removeItem('idaccount');
        localStorage.removeItem('auth_token');
    }




}