import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router
  ) {
  }

  /*
  * 路由守卫
  * */
  canActivate() {
    let token = localStorage.getItem('ngToken')
    if (!token) {
      this.router.navigate(['/login'])
      return false
    }
    return true;
  }
}
