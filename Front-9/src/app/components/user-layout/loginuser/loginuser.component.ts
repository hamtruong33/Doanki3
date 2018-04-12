import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {UserService} from '../../../services/user.service';
@Component({
  selector: 'loginuser',
  templateUrl: './loginuser.component.html',  
})
export class LoginuserComponent implements OnInit {
  private loginForm: FormGroup;
  errorMsg:string='';
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  login(): void {
    this.userService.login(this.loginForm.value
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
