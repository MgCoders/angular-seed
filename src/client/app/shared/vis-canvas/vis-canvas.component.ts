import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';
import { Tool } from '../../_models/tool';

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
   nodes:any = new vis.DataSet([]);
   edges:any = new vis.DataSet([]);
   container:any;
   network:any;

  constructor(private element: ElementRef) {

  }

  ngOnInit(): void {
    this.container = document.getElementById('mynetwork');
    var data = {
      nodes: this.nodes,
      edges: this.edges
    };
    var options = {};
    this.network = new vis.Network(this.container, data, options);

    /*var nodes = new vis.DataSet([
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
    var network = new vis.Network(container, data, options);*/
    this.nodes.add({label:'HOLA',id:1});
    this.nodes.add({label:'CHAU',id:2});
    this.edges.add({to:1,from:2});

    this.network.on('click', (obj:any) => this.clickEvent.emit(obj));
  }

  public addWorkflowStep(tool: any) {
    //TODO: antes de esto un modal? que presente opciones para los links entres steps
    //TODO: acá va a ser más complejo, ir al webservice generar el step con los links, etc
      var node = new Node();
      node.tool = tool;
      node.label = tool.name;
      node.id = tool.id;
      this.nodes.add(node);
  }


}
export class Node {
  tool:Tool;
  id:string;
  label:string;
}

