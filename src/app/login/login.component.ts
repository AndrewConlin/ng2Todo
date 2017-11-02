import { Component, OnInit } from '@angular/core';

import { AuthService } from './../auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})

export class LoginComponent implements OnInit {

  public login(form): any {
    const user = {
      email : form.value.email,
      password : form.value.password
    };
    console.log(user);

    this.authService.login(user).subscribe(
      data => {this.router.navigateByUrl('todos'); form.reset(); },
      error => console.error(error)
    );
  }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

}
