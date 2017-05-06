import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../_guards/auth.guard';
import { ToolsComponent } from './tools.component';

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
