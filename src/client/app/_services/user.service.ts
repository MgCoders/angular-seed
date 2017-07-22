import { Injectable } from '@angular/core';
import { RequestOptions, Response} from '@angular/http';
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

 /* getById(id: number) {
    return this.authHttp.get(Config.API + '/api/users' + id,)
  }

  private jwt() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new  Headers({ 'Authorization': 'Bearer ' + currentUser });
      return new RequestOptions({ headers: headers });
    }
  }*/

}
