import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GraphComponent } from './graph.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'graph', component: GraphComponent}
    ])
  ],
  exports: [RouterModule]
})
export class GraphRoutingModule {
}
