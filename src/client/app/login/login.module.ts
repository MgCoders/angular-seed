import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { AuthGuard } from '../_guards/auth.guard';
import { AuthenticationService } from '../_services/authentication.service';
import { UserService } from '../_services/user.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AuthAdminRoleGuard } from '../_guards/authAdminRole.guard';

@NgModule({
  imports: [
    LoginRoutingModule,
    FormsModule,
    BrowserModule,
    SharedModule.forRoot()
  ],
  declarations: [
    LoginComponent
  ],
  exports: [LoginComponent],
  providers: [
    AuthGuard,
    AuthAdminRoleGuard,
    AuthenticationService,
    UserService
  ]
})


export class LoginModule {
}
