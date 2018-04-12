import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {AccountService} from '../../../services/account.service';
import {Account} from '../../../entities/account.entity';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'

})
export class LoginComponent implements OnInit {
  private loginForm: FormGroup;
  errorMsg:string='';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private accountService :AccountService
   ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  ngAfterViewInit(
    
  ){
   
  }
  login():void {

    this.accountService.login(this.loginForm.value
      .username, this.loginForm.value.password).subscribe(
          res => {
           
              if(res.data.length == 1) {
                  this.errorMsg = '';
                  localStorage.setItem('auth_token', this.loginForm.value
                  .username);
                  this.router.navigate(['']);
              } else {
                  this.errorMsg = 'Invalid Account';
              }
          },
          error => {
              console.log(error)
          }
      );
  }

}
