import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ToolsComponent } from './tools.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'tools', component: ToolsComponent}
    ])
  ],
  exports: [RouterModule]
})

export class ToolsRoutingModule {
}
