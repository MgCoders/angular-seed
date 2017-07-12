import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { MainComponent } from '../main/main.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '' , component: MainComponent,
       children: [{ path: 'login', component: LoginComponent }]
      }
    ])
  ],
  exports: [RouterModule]
})
export class LoginRoutingModule {
}
