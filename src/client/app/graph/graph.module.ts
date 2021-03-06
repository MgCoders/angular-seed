import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { GraphRoutingModule } from './graph-routing.module';
import { GraphComponent } from './graph.component';
import { WorkflowService } from '../_services/workflow.service';
import { StepDetailComponent } from './step-detail.component';
import { MapeoPuertoComponent } from './mapeo-puerto.component';

@NgModule({
  imports: [CommonModule, GraphRoutingModule,SharedModule],
  declarations: [GraphComponent,StepDetailComponent,MapeoPuertoComponent],
  exports: [GraphComponent,StepDetailComponent,MapeoPuertoComponent],
  providers: [WorkflowService]
})
export class GraphModule {
}
