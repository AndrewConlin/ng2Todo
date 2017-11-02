import { Component, OnInit } from '@angular/core';

import { AuthService } from './../auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public isLoggedIn(): boolean {
    if (this.authService.getToken().id) {
      return true;
    }
    return false;
  }

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
