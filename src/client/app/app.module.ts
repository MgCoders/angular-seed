import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { MainModule } from './main/main.module';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './login/login.module';
import { ToolsModule } from './tools/tools.module';
import { GraphModule } from './graph/graph.module';
import { RegisterModule } from './register/register.module';


import {
  MdButtonModule,
  MdIconModule,
  MdSidenavModule
} from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthModule } from './auth.module';

@NgModule({
  imports: [BrowserModule, AuthModule, NoopAnimationsModule, MdSidenavModule, MdIconModule,
    MdButtonModule, SharedModule.forRoot(), FlexLayoutModule,
    HttpModule, AppRoutingModule, HomeModule,
    LoginModule, ToolsModule,GraphModule, AboutModule, MainModule, RegisterModule],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})
export class AppModule {
}
