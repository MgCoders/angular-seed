import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Config } from '../shared/config/env.config';
import { User } from '../_models/index';
import { AuthHttp } from 'angular2-jwt';


@Injectable()
export class UserService {
  constructor(public authHttp: AuthHttp) {
  }

  getUsers(): Observable<User[]> {
    return this.authHttp.get(Config.API + '/api/users')
      .map((response: Response) => response.json());
  }
}
