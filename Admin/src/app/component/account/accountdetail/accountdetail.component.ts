import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../../../services/account.service';
import{Account} from '../../../entities/account.entity';
@Component({
  selector: 'app-accountdetail',
  templateUrl: './accountdetail.component.html',
  styleUrls: ['./accountdetail.component.css']
})
export class AccountdetailComponent implements OnInit {
  account:Account;
  accountnew:Account;
  editfrom: FormGroup;
  photo:string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private accountservice:AccountService
  ) { }

  ngOnInit() {
    let params: any = this.activatedRoute.snapshot.params;
    this.accountservice.findById(params.id).subscribe(
      res=>{
        this.account=res;
        this.photo =this.account.acc_photo;
        
        this.editfrom = this.formBuilder.group({
          acc_firstname:[this.account.acc_firstname],
          acc_lastname:this.account.acc_lastname,
          acc_email: [this.account.acc_email,[Validators.required]],
          acc_password: this.account.acc_password,
          acc_phone: this.account.acc_phone,
          acc_photo : this.account.acc_photo,
          status: this.account.status,
          role:this.account.role
        });
      },
      error => {
        console.log(error);
      }
    );
  }
  save(){
       this.accountnew=this.editfrom.value;
       this.accountnew._id= this.account._id;
       var result = confirm('Are u sure ?');
       if (result) {
         this.accountservice.update(this.accountnew).subscribe(
           data => {
             this.router.navigate(['list-account']);
   
           },
           error => {
             alert('Error');
           }
         );
       }
  }

}
