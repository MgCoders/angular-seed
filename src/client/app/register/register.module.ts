import { NgModule } from '@angular/core';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NameListService } from '../shared/name-list/name-list.service';
import { ToolService } from '../_services/tool.service';
import { MdListModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule,FormsModule,
    RegisterRoutingModule, SharedModule.forRoot(),MdListModule],
  declarations: [RegisterComponent],
  exports: [RegisterComponent],
  providers: [NameListService, ToolService]
})

export class RegisterModule { }
