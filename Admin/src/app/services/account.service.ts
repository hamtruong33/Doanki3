import { Injectable } from '@angular/core';
import {Response,Http,Headers,Request,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx'; // de xu ly bat dong bo 
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import {Account} from '../entities/account.entity';

@Injectable()
export class AccountService {
    private BASE_URL : string = 'http://localhost:9999/api/account/';
    constructor(
        private http :Http,
        
    ){}

    findAll():Observable<Account[]>{
        return this.http.get(this.BASE_URL+'findAll')
        .map((res : Response) =>{ // neu ham get tra ket qua kieu Response thi thuc hien hanh dong sau {}
            return res.json();

        })
        .catch((err :any)=>{
            return Observable.throw(new Error(err.status));

        });
    }
    create(account: Account){
        var headers = new Headers({
            'Content-Type':'application/json'
        });
        var options = new RequestOptions({
            headers:headers // headers dung truoc la key  , headers dung sau la value
        });
        var body = JSON.stringify(account);
        return this.http.post(this.BASE_URL+'create',body,options)
                    .map((res:Response)=>res.json());
    }
    delete(id:string){
         return this.http.delete(this.BASE_URL+'delete/'+id)
                        .map((res:Response)=>res.json());
    }
    checkaccount(username,password){
        var data = "username=" + username + "&password=" + password + "&grant_type=password";
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
    return this.http.post(this.BASE_URL + '/token', data, );

    }
    
}