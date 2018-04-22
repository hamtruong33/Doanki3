import { Component, OnInit ,ElementRef} from '@angular/core';
import { User } from '../../../entities/user.entity';
import { UserService } from '../../../services/user.service';
declare const $;
window['$'] = window['jQuery'] = $;
@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
  users: User[];
  constructor(
    private userservice :UserService
  ) { }

  ngOnInit() {
    this.loaddata();
  }
  ngAfterViewInit() {
    $(function () {
      $('#example1').DataTable()
      $('#example2').DataTable({
        'paging': true,
        'lengthChange': false,
        'searching': false,
        'ordering': true,
        'info': true,
        'autoWidth': false
      })
    })
  }
  loaddata() {
    this.userservice.findAll().subscribe(// khi xu ly xong ham subscribe cho biet se xu ly the nao 
      res => {//neu thanh cong 
        this.users = res;

      },
      error => {// neu that bai
        console.log(error);
      }
    );
  }
  delete(id: string) {
    var result = confirm('Are u sure ?');
    if (result) {
      this.userservice.delete(id).subscribe(
        res => {
          alert('success');
          this.loaddata();
        },
        error => {
          alert('Error');
        }
      );

    }

  }

}
