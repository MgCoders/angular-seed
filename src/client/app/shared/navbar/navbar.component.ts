import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';
import { AuthenticationService } from '../../_services/authentication.service';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
})
export class NavbarComponent {

  @Output()
  toogleSideNavEvent: EventEmitter<boolean> = new EventEmitter();


  constructor(private auth: AuthenticationService) {
  }

  public close(): void {
    this.toogleSideNavEvent.emit(true);
  }
}
