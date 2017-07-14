import { Injectable } from '@angular/core';
import {
  Headers,
  Http,
  RequestOptions,
  Response
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { JwtHelper } from 'angular2-jwt';
import { Router } from '@angular/router';
import { Config } from '../shared/config/env.config';

@Injectable()
export class AuthenticationService {

  jwtHelper: JwtHelper = new JwtHelper();
  public lastUrl = '/';

  constructor(private http: Http, private router: Router) {
  }

  public loggedIn():boolean {
    var token = sessionStorage.getItem('token');
    return token && this.jwtHelper.decodeToken(token) && !this.jwtHelper.isTokenExpired(token);
  }

  login(email: string, password: string): Observable<boolean> {
    const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    const options = new RequestOptions({headers: headers});
    let body = new URLSearchParams();
    body.set('email', email);
    body.set('password', password);
    return this.http.post(Config.API + '/omicflows-backend/rest/users/login', body.toString(), options)
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let token = response.json() && response.json().token;
        if (token) {
          // set token property
          var role = this.jwtHelper.decodeToken(token).role;
          // store username and jwt token in local storage to keep user logged in between page refreshes
          sessionStorage.setItem('token', token.split(' ')[1]);
          sessionStorage.setItem('currentUser',JSON.stringify({email: email, role:role}))
          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      });
  }

  public logout() {
    // clear token remove user from local storage to log user out
    console.log('Logout......');
    sessionStorage.removeItem('currentUser');
    sessionStorage.removeItem('token');
  }

  public loggedAsAdminRole() {
    if (JSON.parse(sessionStorage.getItem('currentUser'))) {
      return JSON.parse(sessionStorage.getItem('currentUser')).role === 'ADMIN';
    }
    return false;
  }

}
