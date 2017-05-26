import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
declare var vis:any;
/**
 * This class represents the toolbar component.
 */
@Component({
  moduleId: module.id,
  selector: 'vis-canvas',
  templateUrl: 'vis-canvas.component.html',
  styleUrls: ['vis-canvas.component.css']
})
export class VisCanvasComponent implements OnInit {

   @Output()
   clickEvent:EventEmitter<any> = new EventEmitter();

  constructor(private element: ElementRef) {
  }

  ngOnInit(): void {


    var nodes = new vis.DataSet([
      {id: 1, label: 'Node 1'},
      {id: 2, label: 'Node 2'},
      {id: 3, label: 'Node 3'},
      {id: 4, label: 'Node 4'},
      {id: 5, label: 'Node 5'}
    ]);
    // create an array with edges
    var edges = new vis.DataSet([
      {from: 1, to: 3},
      {from: 1, to: 2},
      {from: 2, to: 4},
      {from: 2, to: 5},
      {from: 3, to: 3}
    ]);
    // create a network
    var container = document.getElementById('mynetwork');
    var data = {
      nodes: nodes,
      edges: edges
    };
    var options = {};
    var network = new vis.Network(container, data, options);

    network.on('click', (obj:any) => this.clickEvent.emit(obj));
  }


}

