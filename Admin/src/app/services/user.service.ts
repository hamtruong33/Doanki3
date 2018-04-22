import { Injectable } from '@angular/core';
import { Response, Http, Headers, Request, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {
    private BASE_URL: string = 'http://localhost:9999/api/user/';
    constructor(
        private http: Http,


    ) { }
    findAll(): Observable<User[]> {
        return this.http.get(this.BASE_URL + 'findAll')
            .map((res: Response) => { 
                return res.json();

            })
            .catch((err: any) => {
                return Observable.throw(new Error(err.status));

            });
    }
    delete(id: string) {
        return this.http.delete(this.BASE_URL + 'delete/' + id)
            .map((res: Response) => res.json());
    }
    findById(id): Observable<User> {
        return this.http.get(this.BASE_URL + 'find/' + id)
            .map((res: Response) => { 
                return res.json();

            })
            .catch((err: any) => {
                return Observable.throw(new Error(err.status));

            });
    }
    update(user: User) {
        var headers = new Headers({
          'Content-Type': 'application/json'
        });
        var options = new RequestOptions({
          headers: headers
        });
        var body = JSON.stringify(user);
        return this.http.put(this.BASE_URL + 'update', body, options).map((res: Response) => res.json());
      }
}