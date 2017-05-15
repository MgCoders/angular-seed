import {
  Headers,
  Http,
  RequestOptions,
  Response
} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { AuthenticationService } from '../_services/index';
import { Tool } from '../_models/index';
import { Injectable } from '@angular/core';

@Injectable()
export class ToolService {
  constructor(private http: Http,
              private authenticationService: AuthenticationService) {
  }

  getTools(): Observable<Tool[]> {
    // add authorization header with jwt token
    let headers = new Headers({'Authorization': this.authenticationService.token});
    let options = new RequestOptions({headers: headers});

    // get users from api
    return this.http.get('http://localhost:8080/omicflows-backend/rest/tools', options)
      .map((response: Response) => response.json());
  }
}
