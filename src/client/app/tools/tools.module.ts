import { ToolService } from '../_services/tool.service';
import { SharedModule } from '../shared/shared.module';
import { ToolsRoutingModule } from './tools-routing.module';
import { NgModule } from '@angular/core';
import { ToolsComponent } from './tools.component';

@NgModule({
  imports: [ToolsRoutingModule, SharedModule],
  declarations: [ToolsComponent],
  exports: [ToolsComponent],
  providers: [ToolService]
})

export class ToolsModule {
}
