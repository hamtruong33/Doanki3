import {Component,OnInit} from '@angular/core';
import {MathService} from './services/math.service';
import {CalculatorService} from './services/Calculator.service';

@Component({
    selector: 'app-root',
    templateUrl: 'demoservices.component.html'
})
export class DemoServicesComponent implements OnInit {
    result1:number;
    result2:number;
    result3:number;
    result4:number;
    x:number=0;
    result:number;



    constructor(private mathservice :MathService,private calculatorservice :CalculatorService){}
  
        ngOnInit() {
            this.result1=this.mathservice.tong(1,2);
            this.result2=this.mathservice.hieu(5,3);
            this.result3= this.calculatorservice.binhphuong(6);
            this.result4= this.calculatorservice.lapphuong(8);
        }
        binhphuong():void{
            this.result= this.calculatorservice.binhphuong(this.x);

        }
        lapphuong():void{
            this.result= this.calculatorservice.lapphuong(this.x);

        }        
       
       

}
