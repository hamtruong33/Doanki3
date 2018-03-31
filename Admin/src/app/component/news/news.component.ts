import {Component,OnInit} from '@angular/core';
import {ActivatedRoute } from '@angular/router';

@Component({
    
    templateUrl: 'news.component.html'
})
export class NewsComponent implements OnInit {
    


    constructor(
        private activateRoute :ActivatedRoute){}
 
    
  
        ngOnInit() {
            this.activateRoute.paramMap.subscribe(params=>{
                var id1 = params.get('id1');
                var id2 = params.get('id2');
                console.log(id1+id2);
            });
        }
        
       

}
