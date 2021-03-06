import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GraphComponent } from './graph.component';
import { MainComponent } from '../main/main.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'graph' , component: MainComponent,
        children: [{ path: '', component: GraphComponent }]
      } 
    ])
  ],
  exports: [RouterModule]
})
export class GraphRoutingModule {
}
