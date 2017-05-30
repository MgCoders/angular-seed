import { WorkflowIn } from './workflowIn';
import { WorkflowOut } from './workflowOut';
export class WorkflowStep {

  public id:string;
  public name:string;
  public json:string;
  public neededInputs: WorkflowIn[];
  public neededOutputs: WorkflowOut[];
}
