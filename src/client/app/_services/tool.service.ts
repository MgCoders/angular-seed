import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Config } from '../shared/config/env.config';
import { Tool } from '../_models/index';
import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class ToolService {
  constructor(public authHttp: AuthHttp) {
  }


  getTools(): Observable<Tool[]> {
    return this.authHttp.get(Config.API+'/omicflows-backend/rest/tools')
      .map((response: Response) => response.json());
  }

  saveTool(tool: Tool):Observable<Response> {
    console.info('SAVE' + tool);
    return this.authHttp.post(Config.API + '/omicflows-backend/rest/tools/save', tool)
      .map((response: Response) => response);
  }

  deleteTool(tool: Tool):Observable<Response> {
    console.info('DELETE' + tool);
    return this.authHttp.delete(Config.API + '/omicflows-backend/rest/tools/delete/' + tool.id)
      .map((response: Response) => response);
  }

}
