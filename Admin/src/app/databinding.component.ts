import {Component,OnInit} from '@angular/core';
@Component({
    selector: 'app-root',
    templateUrl: 'databinding.component.html'
})
export class DataBindingComponent implements OnInit {
    fullName: string='abc';
    number1: number=0;
    number2: number=0;
    width:number=200;
    height:number=300;
    title:string='My photo';
    sum():number{
       return this.number1+this.number2;
    }
  
        ngOnInit() {
            
        }
       

}
