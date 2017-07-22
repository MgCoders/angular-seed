import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', redirectTo: 'home', pathMatch: 'full'}
    ])
  ],

  exports: [RouterModule]
})

export class MainRoutingModule {
}
