import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';
import { Tool } from '../../_models/tool';
import { Workflow } from '../../_models/workflow';
import { forEach } from '@angular/router/src/utils/collection';
import { WorkflowStep } from '../../_models/workflowStep';

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
    var options = {
      autoResize: true,
      height: '100%',
      width: '100%',
      layout: {
        hierarchical:
          {
            enabled: true,
            direction: 'UD'
          }
      },
      physics: {
        enabled: false
      },
      manipulation: {
        enabled: false
      },
      nodes:{
        shape: 'image',
        image:'https://s3.amazonaws.com/of-tools-icons/d2.png',
        font: '12px arial white'
      },
      edges: {
        arrows:'middle',
        font: {
          size: 12,
          face: 'arial',
          strokeWidth: 0,
          color: 'white'
        }
      }
    };
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

    this.nodes.add({label:'CHAU',id:2});
    this.nodes.add({label:'HOLA',id:1});
    this.edges.add({to:1,from:2});

    this.network.on('click', (obj:any) => this.clickEvent.emit(obj));
  }

  /**
   * Me pasan el WF que adentro tiene lo necesario
   * para volver a generar nodos y edges.
   * Esta funcion hace la magia.
   * @param wf
   */
  public updateWorkflow(workflow: Workflow) {
    console.info('UPDATE GRAPH');
    this.nodes.clear();
    this.edges.clear();
    workflow.steps.forEach(step => {
      console.info('ADD NODE '+step.id);
      step.neededInputs.filter(input => input.mapped).forEach(input => {
        this.edges.add({from:input.sourceMappedToolName,to:step.name,label:input.schema+':'+input.sourceMappedPortName+'->'+input.name});
      });
      this.nodes.add(new Node(step,step.name,step.id));
    });
    //TODO:se pueden dibujar las entradas y salidas como nodos tmb, y en el slider dar la posibilidad de subir los archivos???
  }


}
export class Node {
  public image: string = '';
  constructor(public tool: WorkflowStep, public id: string, public label: string) {
    this.tool = tool;
    this.id = id;
    this.label = label;
    if (this.tool.neededInputs.find(input => {
        return !input.mapped;
      }))
      this.image = 'https://s3.amazonaws.com/of-tools-icons/s3-logo.png';
    else
      this.image = 'https://s3.amazonaws.com/of-tools-icons/d2.png';
  }
}

