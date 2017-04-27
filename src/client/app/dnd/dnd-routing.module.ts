import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DndComponent } from './dnd.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'dnd', component: DndComponent }
    ])
  ],
  exports: [RouterModule]
})
export class DndRoutingModule { }
