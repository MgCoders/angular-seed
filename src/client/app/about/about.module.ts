import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NameListService } from '../shared/name-list/name-list.service';
import { ToolService } from '../_services/tool.service';
import { MdListModule } from '@angular/material';

@NgModule({
  imports: [AboutRoutingModule, SharedModule.forRoot(),MdListModule],
  declarations: [AboutComponent],
  exports: [AboutComponent],
  providers: [NameListService, ToolService]
})

export class AboutModule {
}
