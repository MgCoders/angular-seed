import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NameListService } from '../shared/name-list/name-list.service';
import { ToolService } from '../_services/tool.service';
import { MdListModule } from '@angular/material';

@NgModule({
  imports: [MainRoutingModule, SharedModule.forRoot(),MdListModule],
  declarations: [MainComponent],
  exports: [MainComponent],
  providers: [NameListService, ToolService]
})

export class MainModule {
}
