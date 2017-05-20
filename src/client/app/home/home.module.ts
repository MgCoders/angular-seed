import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NameListService } from '../shared/name-list/name-list.service';
import { ToolService } from '../_services/tool.service';
import { SidebarModule } from 'ng-sidebar';

@NgModule({
  imports: [HomeRoutingModule, SharedModule, SidebarModule.forRoot()],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  providers: [NameListService, ToolService]
})
export class HomeModule {


}
