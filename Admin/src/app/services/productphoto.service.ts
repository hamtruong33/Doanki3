import { Injectable } from '@angular/core';
import { Response, Http, Headers, Request, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx'; // de xu ly bat dong bo 
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Product } from '../entities/product.entity';
import { ProductPhoto } from '../entities/productphoto.entity';

@Injectable()
export class ProductPhotoService {
  private BASE_URL: string = 'http://localhost:9999/api/product/';

  constructor(
    private http: Http,
  ) { }

  findByProduct(id):Observable<ProductPhoto>{
    return this.http.get(this.BASE_URL+'findByProduct/'+id)
    .map((res : Response) =>{ 
        return res.json();

    })
    .catch((err :any)=>{
        return Observable.throw(new Error(err.status));

    });
}

}
