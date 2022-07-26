import { Component, OnInit } from '@angular/core';

const ADDTASKTEXT:string="Add Task!";
const CLOSEPANELTEXT:string="Close Add Panel";
const HEADERTITLE:string="Task List!";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})



export class HeaderComponent implements OnInit {
  public title:string='';
  public addTaskPanel:boolean=false;
  public addTaskButtonText:string="";
  
  constructor() { }

  ngOnInit(): void {
    this.title=HEADERTITLE;
    this.addTaskButtonText=ADDTASKTEXT;
  }

  toggleButton(){
    this.addTaskPanel=!this.addTaskPanel;
    this.addTaskPanel ? this.addTaskButtonText=CLOSEPANELTEXT : this.addTaskButtonText=ADDTASKTEXT;
  }
  changeAddTaskPanelVisibility(){
    this.toggleButton();
  }
}
