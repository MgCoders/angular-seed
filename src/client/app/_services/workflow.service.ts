import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Config } from '../shared/config/env.config';
import { Tool } from '../_models/index';
import { Injectable } from '@angular/core';
import { User } from '../_models/user';
import { Workflow } from '../_models/workflow';
import { WorkflowStep } from '../_models/workflowStep';
import { AuthHttp } from 'angular2-jwt';


@Injectable()
export class WorkflowService {
  constructor(private authHttp: AuthHttp) {
  }

  newWorkflow(user: User): Observable<Workflow> {
    return this.authHttp.post(Config.API + '/omicflows-backend/rest/workflows', user)
      .map((response: Response) => response.json());
  }

  newStep(tool: Tool): Observable<WorkflowStep> {
    console.info('NEW STEP' , tool);
    return this.authHttp.get(Config.API + '/omicflows-backend/rest/workflows/step/' + tool.id)
      .map((response: Response) => response.json());
  }

  addStepToWorkflow(workflow:Workflow,step:WorkflowStep):Observable<Workflow>{
    return this.authHttp.post(Config.API + '/omicflows-backend/rest/workflows/' + workflow.id, step)
      .map((response: Response) => response.json());
  }

  closeWorkflow(workflow:Workflow): Observable<Workflow> {
    console.info('CLOSE WF' ,workflow);
    return this.authHttp.get(Config.API + '/omicflows-backend/rest/workflows/close/' + workflow.id)
      .map((response: Response) => response.json());
  }


}
