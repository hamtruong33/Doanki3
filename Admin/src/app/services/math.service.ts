import { Injectable } from '@angular/core';


@Injectable()
export class MathService{
    tong(a:number,b:number): number {
        return a+b;

    }
    hieu(a:number,b:number): number {
        return a-b;

    }
    tich(a:number,b:number): number {
        return a*b;

    }


}