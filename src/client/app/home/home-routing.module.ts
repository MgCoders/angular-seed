import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { MainComponent } from '../main/main.component';

@NgModule({
  imports: [

    RouterModule.forChild([
      {path: '' , component: MainComponent,
        children: [{ path: 'home', component: HomeComponent }]
      }
    ])
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
