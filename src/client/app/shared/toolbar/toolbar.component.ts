import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { AuthenticationService } from '../../_services/authentication.service';
import { AuthHttp } from 'angular2-jwt';

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


  constructor(public auth:AuthenticationService) {
  }

  @Input()
  sidenavOpened: boolean;
  @Output()
  toogleSideNavEvent: EventEmitter<boolean> = new EventEmitter();

  public toogle(): void {
    this.sidenavOpened = !this.sidenavOpened;
    this.toogleSideNavEvent.emit(this.sidenavOpened);
  }




}

