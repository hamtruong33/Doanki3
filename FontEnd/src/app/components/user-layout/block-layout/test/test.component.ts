import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  title = 'abgular 4 with jquery';
  toggleTitle(){
    $('.title').slideToggle(); //
  }

  constructor() { }

  ngOnInit() {
  }

}
