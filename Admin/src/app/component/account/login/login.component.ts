import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder } from '@angular/forms';
import {Account} from '../../../entities/account.entity';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import {AccountService} from '../../../services/account.service';

@Component({
    selector: 'app-applogin',
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
    isLoginError : boolean = false;

    constructor(
        private formBuilder :FormBuilder,
        private accountservice: AccountService,
        private router: Router
    ) { }

    ngOnInit() {}
    login(username,password){
        this.accountservice.checkaccount(username,password).subscribe((data : any)=>{
            localStorage.setItem('userToken',data.access_token);
            this.router.navigate(['/home']);
          },
          (err : HttpErrorResponse)=>{
            this.isLoginError = true;
          });
        
    }

    


}
