import { Injectable } from '@angular/core';
import { Response, Http, Headers, Request, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Shop } from '../entities/shop.entity';
import { ListShop } from '../entities/listshop.entity';





@Injectable()
export class ShopService {
    private BASE_URL: string = 'http://localhost:9999/api/shop/';

    constructor(
        private http: Http,


    ) { }

    findAll(): Observable<Shop[]> {
        return this.http.get(this.BASE_URL + 'findAll')
            .map((res: Response) => { // neu ham get tra ket qua kieu Response thi thuc hien hanh dong sau {}
                return res.json();

            })
            .catch((err: any) => {
                return Observable.throw(new Error(err.status));

            });
    }
    create(shop: Shop) {
        var headers = new Headers({
            'Content-Type': 'application/json'
        });
        var options = new RequestOptions({
            headers: headers // headers dung truoc la key  , headers dung sau la value
        });
        var body = JSON.stringify(shop);
        return this.http.post(this.BASE_URL + 'create', body, options)
            .map((res: Response) => res.json());
    }
    delete(id: string) {
        return this.http.delete(this.BASE_URL + 'delete/' + id)
            .map((res: Response) => res.json());
    }
    findById(id): Observable<Shop> {
        return this.http.get(this.BASE_URL + 'findById/' + id)
            .map((res: Response) => { // neu ham get tra ket qua kieu Response thi thuc hien hanh dong sau {}
                return res.json();

            })
            .catch((err: any) => {
                return Observable.throw(new Error(err.status));

            });
    }
    update(shop: Shop){
        var headers = new Headers({
            'Content-Type':'application/json'
        });
        var options = new RequestOptions({
            headers: headers
        });
        var body = JSON.stringify(shop);
        return this.http.put(this.BASE_URL+'update', body, options).map((res:Response)=>res.json());
    }
    findbyuser(): Observable<Shop[]> {
        
        return this.http.get(this.BASE_URL + 'findbyuser/')
            .map((res: Response) => { // neu ham get tra ket qua kieu Response thi thuc hien hanh dong sau {}
                return res.json();

            })
            .catch((err: any) => {
                return Observable.throw(new Error(err.status));

            });
    }
    verifyshop(): Observable<Shop[]> {
        
        return this.http.get(this.BASE_URL + 'verifyshop/')
            .map((res: Response) => { 
                return res.json();

            })
            .catch((err: any) => {
                return Observable.throw(new Error(err.status));

            });
    }
    count(){
        return this.http.get(this.BASE_URL + 'count')
        .map((res: Response) => {
            return res.json();

        })
        .catch((err: any) => {
            return Observable.throw(new Error(err.status));

        });
    }
    



}