import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appheader',
  templateUrl: './appheader.component.html',
  styleUrls: ['./appheader.component.css']
})
export class AppheaderComponent implements OnInit {
  username :string='';
  constructor() { }

  ngOnInit() {
    this.username=localStorage.getItem('auth_token');
  }

}
