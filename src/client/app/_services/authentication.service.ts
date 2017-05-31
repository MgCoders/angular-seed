import { Injectable } from '@angular/core';
import {
  Headers,
  Http,
  RequestOptions,
  Response
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AuthConfigConsts, AuthHttp, JwtHelper, tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthenticationService {

  jwtHelper: JwtHelper = new JwtHelper();

  constructor(private http: Http) {
  }

  public loggedIn():boolean {
    console.info('check if logged');
    var token = sessionStorage.getItem('token');
    return token && this.jwtHelper.decodeToken(token) && !this.jwtHelper.isTokenExpired(token);
  }

  login(email: string, password: string): Observable<boolean> {
    const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    const options = new RequestOptions({headers: headers});
    let body = new URLSearchParams();
    body.set('email', email);
    body.set('password', password);
    return this.http.post('http://localhost:8080/omicflows-backend/rest/users/login', body.toString(), options)
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let token = response.json() && response.json().token;
        if (token) {
          // set token property

          var role = this.jwtHelper.decodeToken(token).role;
          console.info(role);
          // store username and jwt token in local storage to keep user logged in between page refreshes
          sessionStorage.setItem('token',token);
          sessionStorage.setItem('currentUser',JSON.stringify({email: email, role:role}))
          console.info(token);
          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      });
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    console.info('logout');
  }

  handleServiceError(error: Response) {
    console.info(error);
    if (error.status === 401) {
      console.info('401');
      this.logout();

      return null;
    } else {
      return Observable.throw(error);
    }
  }
}
