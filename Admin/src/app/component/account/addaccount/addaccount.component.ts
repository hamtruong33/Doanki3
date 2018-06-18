import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../../../services/account.service';
import{Account} from '../../../entities/account.entity';
@Component({
  selector: 'app-addaccount',
  templateUrl: './addaccount.component.html',
  styleUrls: ['./addaccount.component.css']
})
export class AddaccountComponent implements OnInit {
  editfrom: FormGroup;
  selectedFile: File;
  imageurl:string;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private accountservice:AccountService
  ) { }

  ngOnInit() {
    this.editfrom = this.formBuilder.group({
      acc_firstname:['',[Validators.required]],
      acc_lastname:['',[Validators.required]],
      acc_email: ['',[Validators.required]],
      acc_password:  ['',[Validators.required]],
      acc_phone: ['',[Validators.required]],
     // acc_photo : this.account.acc_photo,
      status: false,
      role:''
    });
  }
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
    
  
   

  }
  save(event){
      this.accountservice.create(this.editfrom.value,this.selectedFile).subscribe(
        data=>{
          this.router.navigate(['/list-account']);
          alert('Register Success ');
        },
        error=>{
          alert('loi roi ');
        }
        
      )
  }

}
