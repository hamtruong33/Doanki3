import { Component, OnInit } from '@angular/core';
import { Product } from './entities/product.entity';


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
    age:number;
    fullName:string='Nguyen van A';
    status:boolean;
    email:any;
    product:Product;
    products:Product[];
        ngOnInit()  {
           this.age=20;
           this.status =true;
           this.email = 'a@gmail.com';
           this.product={
               id:'p01',
               name:'name 1',photo:'thumb1.gif',
               price:23,quantity:445

           };
           this.products=[{
                 id:'p01',
               name:'name 1',
               photo:'thumb1.gif',
               price:23,
               quantity:445
           },{
                 id:'p02',
               name:'name 2',
               photo:'thumb2.gif',
               price:23,
               quantity:445

           },{
                 id:'p03',
               name:'name 3',photo:'thumb3.gif',
               price:553,quantity:445

           }
           ];

        }

    constructor(

    ){}


}