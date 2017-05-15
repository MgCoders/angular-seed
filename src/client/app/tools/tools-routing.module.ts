import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ToolsComponent } from './tools.component';
import { AuthGuard } from '../_guards/auth.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'tools', component: ToolsComponent, canActivate: [AuthGuard]}
    ])
  ],
  exports: [RouterModule]
})

export class ToolsRoutingModule {
}
