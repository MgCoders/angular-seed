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
  MdCardModule, MdCheckboxModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule, MdSelectModule,
  MdSidenavModule,
  MdSlideToggleModule,
  MdSnackBarModule, MdTabsModule,
  MdToolbarModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthenticationService } from '../_services/authentication.service';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, RouterModule,MdSidenavModule,
    MdToolbarModule, MdButtonModule, MdCardModule, MdListModule, MdIconModule,
    MdMenuModule, MdSnackBarModule, MdSlideToggleModule, MdInputModule, FlexLayoutModule,MdTabsModule,MdCheckboxModule,MdSelectModule],
  declarations: [ToolbarComponent, NavbarComponent, VisCanvasComponent],
  exports: [ToolbarComponent, NavbarComponent,
    CommonModule, FormsModule, RouterModule, VisCanvasComponent,
    MdSidenavModule,
    MdToolbarModule, MdButtonModule, MdCardModule, MdListModule, MdIconModule,
    MdMenuModule, MdSnackBarModule, MdSlideToggleModule, MdInputModule, FlexLayoutModule,MdTabsModule,MdCheckboxModule,MdSelectModule],
  providers: [AuthenticationService]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [NameListService,AuthenticationService]
    };
  }
}
