import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../../../services/account.service';
import { Account } from '../../../entities/account.entity';
declare const $;
window['$'] = window['jQuery'] = $;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'

})
export class LoginComponent implements OnInit {
  private loginForm: FormGroup;
  errorMsg: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      acc_email: ['', [Validators.required]],
      acc_password: ['', [Validators.required]]
    });
  }
  ngAfterViewInit() {
    $(function () {
      $('input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' /* optional */
      });
    });
  }
  login(): void {

    this.accountService.login(this.loginForm.value
      .acc_email, this.loginForm.value.acc_password).subscribe(
        res => {

          if (res.data.auth == true) {
            console.log(res.data.id);
            this.errorMsg = '';
            localStorage.setItem('idaccount', res.data.data.id);
            localStorage.setItem('auth_token', res.data.token);
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
