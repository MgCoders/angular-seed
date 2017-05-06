import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs";
import "rxjs/add/operator/map";

import {AuthenticationService} from "../_services/index";
import {Tool} from "../_models/index";

@Injectable()
export class ToolService {
  constructor(private http: Http,
              private authenticationService: AuthenticationService) {
  }

  getTools(): Observable<Tool[]> {
    // add authorization header with jwt token
    let headers = new Headers({'Authorization': 'Bearer ' + this.authenticationService.token});
    let options = new RequestOptions({headers: headers});

    // get users from api
    return this.http.get('/rest/tool', options)
      .map((response: Response) => response.json());
  }
}
