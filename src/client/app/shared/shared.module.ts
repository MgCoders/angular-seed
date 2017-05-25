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
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdSidenavModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdToolbarModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, RouterModule,MdSidenavModule,
    MdToolbarModule, MdButtonModule, MdCardModule, MdListModule, MdIconModule,
    MdMenuModule, MdSnackBarModule, MdSlideToggleModule, MdInputModule, FlexLayoutModule],
  declarations: [ToolbarComponent, NavbarComponent, VisCanvasComponent],
  exports: [ToolbarComponent, NavbarComponent,
    CommonModule, FormsModule, RouterModule, VisCanvasComponent,
    MdSidenavModule,
    MdToolbarModule, MdButtonModule, MdCardModule, MdListModule, MdIconModule,
    MdMenuModule, MdSnackBarModule, MdSlideToggleModule, MdInputModule, FlexLayoutModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [NameListService]
    };
  }
}
