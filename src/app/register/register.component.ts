import { Component, OnInit } from '@angular/core';

import { AuthService } from './../auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthService]
})
export class RegisterComponent implements OnInit {

  public register(form): any {

    const user = {
      email : form.value.email,
      password : form.value.pass1
    };

    console.log(user);

    this.authService.register(user).subscribe(
      data => this.router.navigateByUrl('todos'),
      error => console.error(error)
    );
  }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

}
