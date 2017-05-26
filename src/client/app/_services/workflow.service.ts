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
import { Tool } from '../_models/index';
import { Injectable } from '@angular/core';
import { User } from '../_models/user';

@Injectable()
export class WorkflowService {
  constructor(private http: Http,
              private authenticationService: AuthenticationService) {
  }

  newWorkflow(user: User): Observable<any> {
    // add authorization header with jwt token
    let headers = new Headers({'Authorization': this.authenticationService.token});
    let options = new RequestOptions({headers: headers});

    return this.http.post(Config.API + '/omicflows-backend/rest/workflows', user, options)
      .map((response: Response) => response.json());
  }

  newStep(tool: Tool, list: any[]): Observable<any> {
    console.info('SAVE' + tool);
    // add authorization header with jwt token
    let headers = new Headers({'Authorization': this.authenticationService.token});
    let options = new RequestOptions({headers: headers});
    return this.http.post(Config.API + '/omicflows-backend/rest/workflows/step/' + tool.id, list, options)
      .map((response: Response) => response.json());
  }

  deleteTool(tool: Tool): Observable<Response> {
    console.info('DELETE' + tool);
    // add authorization header with jwt token
    let headers = new Headers({'Authorization': this.authenticationService.token});
    let options = new RequestOptions({headers: headers});
    return this.http.delete(Config.API + '/omicflows-backend/rest/tools/delete/' + tool.id, options)
      .map((response: Response) => response);
  }

}
