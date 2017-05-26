import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  MdSidenav,
  MdSnackBar
} from '@angular/material';
import { ToolService } from '../_services/tool.service';
import { Tool } from '../_models/tool';
import { WorkflowService } from '../_services/workflow.service';
import { User } from '../_models/user';
import { VisCanvasComponent } from '../shared/vis-canvas/vis-canvas.component';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'graph-component',
  templateUrl: 'graph.component.html',
  styleUrls: ['graph.component.css']
})
export class GraphComponent implements OnInit {



  @ViewChild('graphDetail')
  detailSideNav: MdSidenav;
  @ViewChild('visCanvas')
  visCanvas: VisCanvasComponent;
  activeWorkflow: any = null;
  selectedObject: any = null;
  tools: Tool[] = [];

  constructor(public toolService: ToolService, public wfService: WorkflowService, private snackBar: MdSnackBar) {
  }

  ngOnInit(): void {
    this.getTools();
    this.newWorkflow();
  }

  canvasClicked(obj: any) {
    console.info(obj);
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

  newWorkflow() {
    var user = new User();
    user.id = '1';
    this.wfService.newWorkflow(user).subscribe(
      wf => this.activeWorkflow = wf,
      error => this.handleError(error)
    );
  }

  newStep(tool: Tool) {
    //TODO: guardar en este componente un diccionario de los nodos, pq el canvas despues me da el id en click.
    var links: any[] = [];
    this.wfService.newStep(tool, links).subscribe(
      step => this.visCanvas.addWorkflowStep(step),
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
