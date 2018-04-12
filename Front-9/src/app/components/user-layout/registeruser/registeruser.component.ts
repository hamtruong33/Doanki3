import { Component, OnInit } from '@angular/core';

import {  FormGroup,FormBuilder,Validators, FormControl, NgForm, AbstractControl} from '@angular/forms';

//function check password confirm
function passwordConfirming(c: AbstractControl): any {
  if(!c.parent || !c) return;
  const pwd = c.parent.get('password');
  const cpwd= c.parent.get('confirmPassword')

  if(!pwd || !cpwd) return ;
  if (pwd.value !== cpwd.value) {
      return { invalid: true };

}
}
//end function check password confirm

@Component({
  selector: 'register',
  templateUrl: './registeruser.component.html'
  
})
export class RegisteruserComponent implements OnInit {

  private registerForm: FormGroup;
  firstname: string;
  lastname: string;
  email: string;
  telephone: string;
  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      fname: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30)])],
      lname: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30)])],
      mail: ['', Validators.compose([Validators.required, Validators.email])],
      phone: ['', Validators.compose([Validators.maxLength(11), Validators.required, Validators.pattern('^[0-9]+$')])],
      fax: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30)])],
      addpress1: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30)])],
      addpress2:'',
      postcode :'',
      country :'',
      city: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30)])],    
      password: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30)])],
      confirmPassword: ['', [Validators.required,passwordConfirming] ]       
    });
  }
  //
  ngOnInit() {

  }
  //
  Submit(registerForm: NgForm) {
    console.log(registerForm.controls);
    console.log(registerForm.value);
  }

}
