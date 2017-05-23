import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { GraphRoutingModule } from './graph-routing.module';
import { GraphComponent } from './graph.component';

@NgModule({
  imports: [CommonModule, GraphRoutingModule,SharedModule],
  declarations: [GraphComponent],
  exports: [GraphComponent]
})
export class GraphModule {
}
