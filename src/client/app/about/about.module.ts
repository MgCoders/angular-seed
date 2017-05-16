import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { DndModule } from 'ng2-dnd';

@NgModule({
  imports: [CommonModule, AboutRoutingModule, DndModule.forRoot()],
  declarations: [AboutComponent],
  exports: [AboutComponent, DndModule]
})
export class AboutModule {
  simpleDrop: any = null;
}
