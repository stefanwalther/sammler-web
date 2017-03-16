import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private auth: UserService, private router: Router) {}

  canActivate() {
    if(this.auth.isLoggedIn()) {
      // this.router.navigate(['/login']);
      return true
    }

    this.router.navigate(['/login']);
    return false;
  }
}
