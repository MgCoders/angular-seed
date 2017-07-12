import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { Config } from './shared/config/env.config';
import './operators';
import { AuthenticationService } from './_services/authentication.service';
import { MdSidenav } from '@angular/material';

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {

  constructor() {
    console.log('Environment config', Config);
  }
}
