import { WorkflowIn } from './workflowIn';
import { WorkflowOut } from './workflowOut';
export class WorkflowStep {

  public name:string;
  public cwl:string;
  public json:string;
  public innerUnmatchedInputs: WorkflowIn[];
  public neededInputs: WorkflowIn[];
  public neededOutput: WorkflowOut[];
}
