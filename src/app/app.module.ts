import { AuthService } from './auth.service';
import { TodoService } from './todo.service';
import { CookieService } from 'angular2-cookie/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';

import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { IncompletePipe } from './incomplete.pipe';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    PageNotFoundComponentComponent,
    AboutComponent,
    ContactComponent,
    IncompletePipe,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [CookieService, TodoService, AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }
