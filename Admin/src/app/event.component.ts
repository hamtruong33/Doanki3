import {Component,OnInit} from '@angular/core';
@Component({
    selector: 'app-root',
    templateUrl: 'event.component.html'
})
export class EventComponent implements OnInit {
    result1: string;
    result2: string='';
        ngOnInit() {
            
        }
        clickMe():void{
            alert('Hello');
        }
        display(event:any):void{
            this.result1= 'Hi '+event.target.value;

        }
        selectCategory(event:any):void{
            this.result2=event.target.value;
        }


}
