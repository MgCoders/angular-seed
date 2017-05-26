import { Component, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'graph-component',
  templateUrl: 'graph.component.html',
  styleUrls: ['graph.component.css']
})
export class GraphComponent {

  @ViewChild('graphDetail')
  detailSideNav: MdSidenav;

  selectedObject:any = null;


  canvasClicked(obj:any) {
    this.detailSideNav.open();
    this.selectedObject = obj;
  }

  exitDetail() {
    this.detailSideNav.close();
    this.selectedObject = null;
  }
}
