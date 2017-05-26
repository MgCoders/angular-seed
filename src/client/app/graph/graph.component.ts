import { Component, OnInit, ViewChild } from '@angular/core';
import { MdSidenav, MdSnackBar } from '@angular/material';
import { ToolService } from '../_services/tool.service';
import { Tool } from '../_models/tool';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'graph-component',
  templateUrl: 'graph.component.html',
  styleUrls: ['graph.component.css']
})
export class GraphComponent implements OnInit{
  ngOnInit(): void {
    this.getTools();
  }


  @ViewChild('graphDetail')
  detailSideNav: MdSidenav;

  selectedObject: any = null;
  tools: Tool[] = [];

  constructor(public toolService: ToolService, private snackBar: MdSnackBar) {
  }

  canvasClicked(obj: any) {
    this.detailSideNav.open();
    this.selectedObject = obj;
  }

  exitDetail() {
    this.detailSideNav.close();
    this.selectedObject = null;
  }

  getTools() {
    this.toolService.getTools()
      .subscribe(
        tools => this.tools = tools,
        error => this.handleError(error)
      );
  }

  private handleError(error: any) {
    console.info(error);

    //TODO: debería venir un error legible de backend y mostrar eso.
    this.notify('error al cargar Tools', 'Ok');

  }

  private notify(status: any, text: any) {
    this.snackBar.open(status, text, {
      duration: 3000
    });
  }
}
