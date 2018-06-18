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
    role:boolean = false;
    constructor(
        private accountservice: AccountService
    ) { }
    ngOnInit() { 
        if(localStorage.getItem('role')==='5acd0aaf356e91022ac26159'){
            this.role=true;
        }
        if(localStorage.getItem('role')==='5acd0aaf356e91022ac26157'){
            this.role=false;
        }
       // console.log(localStorage.getItem('idaccount'));
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