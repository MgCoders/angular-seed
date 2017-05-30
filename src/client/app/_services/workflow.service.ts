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
import { Workflow } from '../_models/workflow';
import { WorkflowStep } from '../_models/workflowStep';

@Injectable()
export class WorkflowService {
  constructor(private http: Http,
              private authenticationService: AuthenticationService) {
  }

  newWorkflow(user: User): Observable<Workflow> {
    // add authorization header with jwt token
    let headers = new Headers({'Authorization': this.authenticationService.token});
    let options = new RequestOptions({headers: headers});

    return this.http.post(Config.API + '/omicflows-backend/rest/workflows', user, options)
      .map((response: Response) => response.json());
  }

  newStep(tool: Tool): Observable<WorkflowStep> {
    console.info('NEW STEP' , tool);
    // add authorization header with jwt token
    let headers = new Headers({'Authorization': this.authenticationService.token});
    let options = new RequestOptions({headers: headers});
    return this.http.get(Config.API + '/omicflows-backend/rest/workflows/step/' + tool.id, options)
      .map((response: Response) => response.json());
  }

  addStepToWorkflow(workflow:Workflow,step:WorkflowStep):Observable<Workflow>{
    console.info('ADD STEP' ,step);
    // add authorization header with jwt token
    let headers = new Headers({'Authorization': this.authenticationService.token});
    let options = new RequestOptions({headers: headers});
    return this.http.post(Config.API + '/omicflows-backend/rest/workflows/' + workflow.id, step, options)
      .map((response: Response) => response.json());
  }

  closeWorkflow(workflow:Workflow): Observable<Workflow> {
    console.info('CLOSE WF' ,workflow);
    // add authorization header with jwt token
    let headers = new Headers({'Authorization': this.authenticationService.token});
    let options = new RequestOptions({headers: headers});
    return this.http.get(Config.API + '/omicflows-backend/rest/workflows/close/' + workflow.id, options)
      .map((response: Response) => response.json());
  }

  deleteTool(tool: Tool): Observable<Response> {
    console.info('DELETE' ,tool);
    // add authorization header with jwt token
    let headers = new Headers({'Authorization': this.authenticationService.token});
    let options = new RequestOptions({headers: headers});
    return this.http.delete(Config.API + '/omicflows-backend/rest/tools/delete/' + tool.id, options)
      .map((response: Response) => response);
  }

}
