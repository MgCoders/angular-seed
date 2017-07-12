import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    RouterModule.forRoot([])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

