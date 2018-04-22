import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../entities/user.entity';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
  user: User;
  editfrom: FormGroup;
  newuser:User;
  isloaddata:Boolean =false;
  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    let params: any = this.activatedRoute.snapshot.params;
    this.userService.findById(params.id).subscribe(
      res => {
        this.user = res;
        this.isloaddata=true;
        this.editfrom = this.formBuilder.group({
          user_lastname: [this.user.user_lastname],
          user_firstname: [this.user.user_firstname],
          user_birthday: [this.user.user_birthday],
          user_address: [this.user.user_address],
          user_email: [this.user.user_email, [Validators.required]],
          user_phone: [this.user.user_phone,],
          user_shopactive: [this.user.user_shopactive,],
          status: [this.user.status,],
          user_password: [this.user.user_password, [Validators.required]]
        });
      },
      error => {
        console.log(error);
      }
    );
  }
  save(): void {
    console.log(this.editfrom.value);
    this.newuser=this.editfrom.value;
    this.newuser._id=this.user._id;
    var result = confirm('Are u sure ?');
    if (result) {
      this.userService.update(this.newuser).subscribe(
        data => {
          this.router.navigate(['listuser']);

        },
        error => {
          alert('Error');
        }
      );
    }
  }

}
