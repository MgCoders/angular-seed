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
import { Workflow } from '../_models/workflow';
import { WorkflowStep } from '../_models/workflowStep';
import { StepDetailComponent } from './step-detail.component';

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
  @ViewChild('stepDetail')
  stepDetail: StepDetailComponent;
  activeWorkflow: Workflow = null;
  selectedObject: WorkflowStep = null;
  selectedIsNew: boolean = false;
  tools: Tool[] = [];

  constructor(public toolService: ToolService, public wfService: WorkflowService, private snackBar: MdSnackBar) {
  }

  ngOnInit(): void {
    this.getTools();
    this.newWorkflow();
  }

  canvasClicked(obj: any) {
    var selectedNode = obj.nodes[0];
    console.info(selectedNode);
    if (selectedNode) {
      var step = this.activeWorkflow.steps.find(step => step.name === selectedNode);
      console.info(step);
      this.selectedIsNew = false;
      this.selectedObject = step;
      this.detailSideNav.open();
    }
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
    var links: any[] = [];
    this.wfService.newStep(tool, links).subscribe(
      step => this.newStepSucceded(step),
      error => this.handleError(error)
    );
  }

  newStepSucceded(step:WorkflowStep) {
    console.info(step);
    this.selectedIsNew = true;
    this.selectedObject = step;
  }

  updateCanvas(workflow:Workflow) {
    this.activeWorkflow = workflow;
    this.visCanvas.updateWorkflow(this.activeWorkflow);
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
