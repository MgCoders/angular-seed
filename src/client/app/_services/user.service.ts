import { Injectable } from '@angular/core';
import {
  Headers,
  Http,
  RequestOptions,
  Response
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Config } from '../shared/config/env.config';
import { AuthenticationService } from '../_services/index';
import { User } from '../_models/index';

@Injectable()
export class UserService {
  constructor(private http: Http,
              private authenticationService: AuthenticationService) {
  }

  getUsers(): Observable<User[]> {
    // add authorization header with jwt token
    let headers = new Headers({'Authorization': this.authenticationService.token});
    let options = new RequestOptions({headers: headers});

    // get users from api
    return this.http.get(Config.API+'/api/users', options)
      .map((response: Response) => response.json());
  }
}
