import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { Tool } from '../_models/tool';
import { ToolService } from '../_services/tool.service';
import { MdSnackBar } from '@angular/material';
import { WorkflowStep } from '../_models/workflowStep';
import { WorkflowService } from '../_services/workflow.service';
import { Workflow } from '../_models/workflow';
import { WorkflowOut } from '../_models/workflowOut';
@Component({
  moduleId: module.id,
  selector: 'step-detail',
  templateUrl: './step-detail.component.html',
  styleUrls: ['step-detail.component.css'],
  exportAs: 'child'
})

export class StepDetailComponent {
  @Input()
  public step: WorkflowStep;
  @Output()
  public workflowChange: EventEmitter<Workflow> = new EventEmitter();
  @Input()
  public isNew: boolean = false;
  @Input()
  public activeWorkflow:Workflow;
  portList:WorkflowOut[] = [];


  constructor(private wfService: WorkflowService, private snackBar: MdSnackBar) {
  }

  onSubmit() {
    this.addStep();
  }

  submitSucceded(tool: Tool) {
   /* this.tool = tool;
    this.isNew = false;
    this.isEdit = false;
    this.toolsChange.emit(true);*/
  }


  deleteStep() {
    /*this.toolService.deleteTool(this.tool)
      .subscribe(res => this.deleteSucceded(res),
        error => this.handleError(error));*/
  }

  deleteSucceded(res:any) {
   /* this.tool = null;
    this.isEdit = false;
    this.isNew = false;
    this.toolsChange.emit(true);*/
  }

  addStep() {
    console.info(this.step);
    if (this.step.neededInputs.find(input => {
        return !input.mapped;
      }))
      console.log('FALTA ENTRADA');
    else
      console.log('OK');

    this.wfService.addStepToWorkflow(this.activeWorkflow, this.step).subscribe(
      workflow => {
        this.activeWorkflow = workflow;
        this.workflowChange.emit(this.activeWorkflow);
        this.step = null;
},
      error => this.handleError(error)
    );
  }


  getPortsFromActiveWorkflow(stepId:string) {
    this.portList = [];
    this.activeWorkflow.steps.find(step => {
      return step.name === stepId;
    }).neededOutputs.forEach(out => this.portList.push(out));
    console.info(this.portList);
  }




  private handleError(error: any) {
    console.info(error);
    if (error.status === 304) {
      this.notify('error trying to edit','Ok');
    } else {
      //TODO: debería venir un error legible de backend y mostrar eso.
      this.notify('invalid Cwl Tool', 'Ok');
    }
  }

  private notify(status: any, text: any) {
    this.snackBar.open(status, text, {
      duration: 3000
    });
  }



}
