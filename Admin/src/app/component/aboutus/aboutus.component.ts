import {Component,OnInit} from '@angular/core';


@Component({
    
    templateUrl: 'aboutus.component.html'
})
export class AboutUsComponent implements OnInit {
    result1 : string;


    constructor(){}
 
    
  
        ngOnInit() {
            this.result1 ='Hello';
        }
        
       

}
