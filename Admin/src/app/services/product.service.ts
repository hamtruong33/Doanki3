import { Injectable } from '@angular/core';
import { Response, Http, Headers, Request, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx'; // de xu ly bat dong bo 
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Product } from '../entities/product.entity';
import { ListProduct } from '../entities/listproduct.entity';

@Injectable()
export class ProductService {
  private BASE_URL: string = 'http://localhost:9999/api/product/';

  constructor(
    private http: Http,
  ) { }
  findAll(): Observable<Product[]> {
    return this.http.get(this.BASE_URL + 'findAll')
      .map((res: Response) => { 
        return res.json();

      })
      .catch((err: any) => {
        return Observable.throw(new Error(err.status));

      });
  }
  findByStatus(): Observable<Product[]> {
    return this.http.get(this.BASE_URL + 'findByStatus')
      .map((res: Response) => { 
        return res.json();

      })
      .catch((err: any) => {
        return Observable.throw(new Error(err.status));

      });
  }
  findById(id): Observable<Product> {
    return this.http.get(this.BASE_URL + 'findById/' + id)
      .map((res: Response) => { 
        return res.json();

      })
      .catch((err: any) => {
        return Observable.throw(new Error(err.status));

      });
  }
  update(product: Product) {
    var headers = new Headers({
      'Content-Type': 'application/json'
    });
    var options = new RequestOptions({
      headers: headers
    });
    var body = JSON.stringify(product);
    return this.http.put(this.BASE_URL + 'update', body, options).map((res: Response) => res.json());
  }
  findByShop(id) :Observable<Product[]> {
    return this.http.get(this.BASE_URL + 'findByShop/' + id)
      .map((res: Response) => { 
        return res.json();

      })
      .catch((err: any) => {
        return Observable.throw(new Error(err.status));

      });
  }
  findByShopName(): Observable<Product[]> {
    return this.http.get(this.BASE_URL + 'findByShopName')
      .map((res: Response) => { 
        return res.json();

      })
      .catch((err: any) => {
        return Observable.throw(new Error(err.status));

      });
  }
  

}
