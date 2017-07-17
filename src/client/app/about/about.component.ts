import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'sd-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css'],
})


export class AboutComponent {

  year: number = new Date().getFullYear();


}

