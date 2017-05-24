import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { ToolService } from '../_services/tool.service';
import { Tool } from '../_models/tool';
import { MdSidenav } from '@angular/material';

@Component({
  moduleId: module.id,
  templateUrl: 'tools.component.html',
  styleUrls: ['tools.component.css']
})

export class ToolsComponent implements OnInit {
  errorMessage: string;
  tools: Tool[] = [];
  selectedTool: Tool = null;
  @ViewChild('detailSideNav')
  detailSideNav: MdSidenav;

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

  selectTool(tool: Tool) {
    this.selectedTool = tool;
    this.detailSideNav.open();
  }

  public detailSideNavClosed(): void {
    this.selectedTool = null;
  }

}
