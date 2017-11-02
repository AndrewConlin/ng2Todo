import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Todo } from './model/todo';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


@Injectable()
export class TodoService {

  constructor(private http: Http, private authService: AuthService, private router: Router) { }

  getTodos(): Observable<Todo[]> {
    this.checkLogin();

    const uid = this.authService.getToken().id;

    return this.http
      .get(`http://localhost:8080/ngTodo/api/users/${uid}/todos`) // gets data
      .map((res) => res.json()) // .map : operator to extract data
      .catch(this.handleError);
   }

  createTodo(todo): Observable<Todo> {
    this.checkLogin();

    const uid = this.authService.getToken().id;

    return this.http
      .post(`http://localhost:8080/ngTodo/api/users/${uid}/todos`, todo)
      .map((res) => res.json()) // .map : operator to extract data
      .catch(this.handleError);
   }

   updateTodo(todo): Observable<Todo> {
    this.checkLogin();

    const uid = this.authService.getToken().id;

    return this.http
      .put(`http://localhost:8080/ngTodo/api/users/${uid}/todos/${todo.id}`, todo)
      .map((res) => res.json()) // .map : operator to extract data
      .catch(this.handleError);
   }

   destroyTodo(todo): Observable<Boolean> {
    this.checkLogin();

    const uid = this.authService.getToken().id;

    return this.http
      .delete(`http://localhost:8080/ngTodo/api/users/${uid}/todos/${todo.id}`)
      .map((res) => res.json()) // .map : operator to extract data
      .catch(this.handleError);
   }

   private checkLogin(): any {
    if (!this.authService.getToken().id) {
      this.router.navigateByUrl('home');
    }
  }
   private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json() || 'Server error');
  }
}

