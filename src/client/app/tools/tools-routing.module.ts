import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ToolsComponent } from './tools.component';
import { AuthAdminRoleGuard } from '../_guards/authAdminRole.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'tools', component: ToolsComponent, canActivate: [AuthAdminRoleGuard]}
    ])
  ],
  exports: [RouterModule]
})

export class ToolsRoutingModule {
}
