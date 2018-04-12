import { Injectable } from '@angular/core';
import { Response, Http, Headers, Request, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx'; // de xu ly bat dong bo 
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@Injectable()
export class UserService {
  private BASE_URL: string = 'http://localhost:9999/api/user/';
  private loggedIn = false;
  constructor(
    private http: Http,
  ) { }
  isLoggedIn(): boolean {
    return this.loggedIn;
  }
  login(email: string, password: string): Observable<any> {

    return this.http.post(this.BASE_URL + 'login', { email: email, password: password })
      .map((res: Response) => {
        var result = res.json();
        this.loggedIn = result.length == 1;
        return { status: res.status, data: result };
      })
      .catch((error: any) => {
        return Observable.throw(new Error(error.status))
      });

  }

}
