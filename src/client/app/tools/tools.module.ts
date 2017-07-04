import { ToolService } from '../_services/tool.service';
import { SharedModule } from '../shared/shared.module';
import { ToolsRoutingModule } from './tools-routing.module';
import { NgModule } from '@angular/core';
import { ToolsComponent } from './tools.component';
import {
  MdButtonModule,
  MdCardModule,
  MdInputModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToolDetailComponent } from './tool-detail.component';


@NgModule({
  imports: [ToolsRoutingModule, SharedModule.forRoot(), MdCardModule, MdButtonModule, FlexLayoutModule, MdInputModule, MdButtonModule],
  declarations: [ToolsComponent,ToolDetailComponent],
  exports: [ToolsComponent],
  providers: [ToolService]
})

export class ToolsModule {
}
