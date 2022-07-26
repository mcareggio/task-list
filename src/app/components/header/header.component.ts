import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public title:string='';
  public addTaskPanel:boolean=false;
  constructor() { }

  ngOnInit(): void {
    this.title="Lista de Tareas";
  }

  toggleButton(){
    this.addTaskPanel=!this.addTaskPanel;
  }
  changeAddTaskPanelVisibility(){
    this.toggleButton();
  }
}
