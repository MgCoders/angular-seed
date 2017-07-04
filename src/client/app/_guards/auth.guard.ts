/**
 * Created by rsperoni on 06/05/17.
 */

import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,private authService:AuthenticationService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.info('pregunto si logged')
    if (this.authService.loggedIn()) {
      // logged in so return true
      console.info('si si');
      return true;
    }

    // not logged in so redirect to login page
    this.authService.lastUrl = state.url;
    this.router.navigate(['login'])
    return false;
  }
}
