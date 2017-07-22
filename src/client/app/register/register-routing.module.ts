import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';
import { MainComponent } from '../main/main.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '' , component: MainComponent,
        children: [{ path: 'register', component: RegisterComponent }]
      }
    ])
  ],
  exports: [RouterModule]
})

export class RegisterRoutingModule {
}

