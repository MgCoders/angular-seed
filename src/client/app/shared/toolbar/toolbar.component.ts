import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { AuthenticationService } from '../../_services/authentication.service';
import { Router } from '@angular/router';

/**
 * This class represents the toolbar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css']
})
export class ToolbarComponent {




  @Input()
  sidenavOpened: boolean;
  @Output()
  toogleSideNavEvent: EventEmitter<boolean> = new EventEmitter();

  constructor(public auth: AuthenticationService, private router: Router) {
  }

  public toogle(): void {
    this.sidenavOpened = !this.sidenavOpened;
    this.toogleSideNavEvent.emit(this.sidenavOpened);
  }




}

