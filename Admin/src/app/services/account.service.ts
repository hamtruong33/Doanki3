import { Injectable } from '@angular/core';
import {Response,Http,Headers,Request,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx'; // de xu ly bat dong bo 
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';



import {Account} from '../entities/account.entity';

@Injectable()
export class AccountService {
    private BASE_URL : string = 'http://localhost:9999/api/account/';
    private loggedIn = false;
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
    isLoggedIn(): boolean {
        return this.loggedIn;
    }
    login(username:string, password:string):Observable<any>{
        return this.http.post(this.BASE_URL + 'login', { username: username, password: password })
            .map((res: Response) => {
                var result = res.json();
                this.loggedIn = result.count == 1;
                return { status: res.status, data: result };
            })
            .catch((error: any) => {
                return Observable.throw(new Error(error.status))
            });

    }
    
}