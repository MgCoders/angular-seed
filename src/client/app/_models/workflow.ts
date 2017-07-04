import { WorkflowStep } from './workflowStep';
import { WorkflowIn } from './workflowIn';
import { WorkflowOut } from './workflowOut';

export class Workflow {

  public id:string;
  public userId:string;
  public name:string;
  public complete:boolean;
  public steps: WorkflowStep[];
  public neededInputs: WorkflowIn[];
  public neededOutput: WorkflowOut[];



}
