import { Component, OnInit } from '@angular/core';

import { AuthService } from './../auth.service';

import { Router } from '@angular/router';



@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
  providers: [AuthService]
})
export class LogoutComponent implements OnInit {

  public logout(): any {
    console.log('logged out');


    this.authService.logout().subscribe(
      data => this.router.navigateByUrl('home'),
      error => console.error(error)
    );
  }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

}

