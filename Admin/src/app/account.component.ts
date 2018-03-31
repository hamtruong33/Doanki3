import {Component,OnInit} from '@angular/core';
import {FormGroup,FormBuilder } from '@angular/forms';
import {Account} from './entities/account.entity';
@Component({
    selector: 'app-root',
    templateUrl: 'account.component.html'
})
export class AccountComponent implements OnInit {
    private registerForm: FormGroup;


    constructor(
        private formBuilder :FormBuilder
    ){}
    
  
        ngOnInit() {
            this.registerForm = this.formBuilder.group({
                username: '',
                password: '',
                description: 'good',
                status: true,
                gender: 'male',
                role: 'r1'
            });
        }
        save():void{
            var account : Account;
            account= this.registerForm.value;
            console.log(JSON.stringify(account));// bien doi tuong thanh Json
            console.log('Account Info');
            console.log('Username :'+account.username);
            console.log('Password :'+account.password);
            console.log('Description :'+account.description);
            console.log('Status: '+account.status);
            console.log('Gender: '+account.gender);
            console.log('Role: '+account.role);
        }
       

}
