import {
  Component,
  OnInit
} from '@angular/core';
import { ToolService } from '../_services/tool.service';

@Component({
  moduleId: module.id,
  templateUrl: 'tools.component.html',
  styleUrls: ['tools.component.css']
})

export class ToolsComponent implements OnInit {
  errorMessage: string;
  tools: any[] = [];

  constructor(public toolService: ToolService) {
  }

  ngOnInit() {
    this.getTools();
  }

  getTools() {
    this.toolService.getTools()
      .subscribe(
        tools => this.tools = tools,
        error => this.errorMessage = <any>error
      );
  }

}
