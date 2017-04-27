import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DndComponent } from './dnd.component';
import { DndRoutingModule } from './dnd-routing.module';

@NgModule({
  imports: [CommonModule, DndRoutingModule],
  declarations: [DndComponent],
  exports: [DndComponent]
})
export class DndModule { }
