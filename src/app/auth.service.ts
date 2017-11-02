import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Todo } from './model/todo';

import {CookieService} from 'angular2-cookie/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {

  constructor(private http: Http, private _cookieService: CookieService) { }

  register(user): Observable<any> {
    return this.http
      .post('http://localhost:8080/ngTodo/api/auth/register', user)
      .map((res) => res.json())
      .do( data => this.createToken(data))
      .catch(this.handleError);
  }

  login(user): Observable<any> {
    return this.http
      .post('http://localhost:8080/ngTodo/api/auth/login', user)
      .map((res) => res.json()) // .map : operator to extract data
      .do( data => this.createToken(data))
      .catch(this.handleError);
  }

  logout(): Observable<any> {
    return this.http
      .post('http://localhost:8080/ngTodo/api/auth/logout', null)
      .map((res) => res.json())
      .do(data => this.removeToken())
      .catch(this.handleError);
  }

  getToken(): any {
    return {
      id : this._cookieService.get('userId'),
      email : this._cookieService.get('userEmail')
    };
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json() || 'Server error');
  }

  private createToken(user) {
    this._cookieService.put('userId', user.id);
    this._cookieService.put('userEmail', user.email);
  }

  private removeToken() {
    this._cookieService.remove('userId');
    this._cookieService.remove('userEmail');
  }


}
