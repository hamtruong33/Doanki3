import { Injectable } from '@angular/core';
import {MathService} from './math.service';


@Injectable()
export class CalculatorService{
    constructor(private mathservice:MathService){}
    binhphuong(x:number):number{
        return this.mathservice.tich(x,x);
    }
    lapphuong(x:number):number{
        return this.mathservice.tich(x,this.binhphuong(x));
    }

   
 

}