import { Component, OnInit } from '@angular/core';
import { AccountService } from './services/account.service';
import { AuthGuard } from './services/auth.guard';



@Component({
    selector: 'app-root',
    templateUrl: 'template.component.html'
})

export class TemplateComponent implements OnInit {

    constructor(
        private accountservice: AccountService
    ) { }
    ngOnInit() { 
        if(!localStorage.getItem('idaccount')){
            this.accountservice.redirectUrl ='/login';
        }
    }
    onLogout() {
        this.accountservice.logout();
        localStorage.removeItem('idaccount');
        localStorage.removeItem('auth_token');
    }




}