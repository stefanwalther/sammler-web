import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../user.service';

import { LoginUser } from '../common/login-user';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor(private authService: UserService, private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit(username, password) {
    this.authService.login(username, password).subscribe(result => {
      if (result) {
        this.router.navigate(['']);
      }
    });
  }

}
