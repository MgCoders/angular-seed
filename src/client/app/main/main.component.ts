import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { Config } from '../shared/config/env.config';
import '../operators';
import { AuthenticationService } from '../_services/authentication.service';
import { MdSidenav } from '@angular/material';


@Component({
  moduleId: module.id,
  selector: 'sd-main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.css'],
})


export class MainComponent implements OnInit {

  @ViewChild('sidenav')
  sidenav: MdSidenav;
  sidenav_opened: boolean = false;

  constructor(private authHelper: AuthenticationService) {
    console.log('Environment config', Config);
  }

  ngOnInit(): void {
    this.authHelper.logout();
  }

  toogleSideNav() {
    this.sidenav.toggle();
  }
}
