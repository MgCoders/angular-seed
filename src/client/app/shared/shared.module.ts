import {
  ModuleWithProviders,
  NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NameListService } from './name-list/name-list.service';
import { VisCanvasComponent } from './vis-canvas/vis-canvas.component';
import {
  MdButtonModule,
  MdCardModule,
  MdIconModule,
  MdListModule,
  MdMenuModule,
  MdSidenavModule,
  MdToolbarModule
} from '@angular/material';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, RouterModule,MdSidenavModule,
    MdToolbarModule, MdButtonModule, MdCardModule, MdListModule, MdIconModule, MdMenuModule],
  declarations: [ToolbarComponent, NavbarComponent, VisCanvasComponent],
  exports: [ToolbarComponent, NavbarComponent,
    CommonModule, FormsModule, RouterModule, VisCanvasComponent,
    MdSidenavModule,
    MdToolbarModule, MdButtonModule, MdCardModule, MdListModule, MdIconModule, MdMenuModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [NameListService]
    };
  }
}
