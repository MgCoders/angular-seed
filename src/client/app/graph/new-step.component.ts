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
@Component({
  moduleId: module.id,
  selector: 'new-step',
  templateUrl: './new-step.component.html',
  styleUrls: ['new-step.component.css'],
  exportAs: 'child'
})

export class NewStepComponent {
  public newStep:WorkflowStep;
  @Input()
  public tool: Tool;
  @Output()
  public newStepEmitter: EventEmitter<WorkflowStep> = new EventEmitter();
  @Input()
  public activeWorkflow:Workflow;


  constructor(private wfService: WorkflowService, private snackBar: MdSnackBar) {
  }

  onSubmit() {
    this.newStepEmitter.emit(this.newStep);
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
