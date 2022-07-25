import { Component, EventEmitter, OnInit } from '@angular/core';
import { Input,Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Taskinterface } from 'src/app/models/taskinterface';

@Component({
  selector: 'app-taskitem',
  templateUrl: './taskitem.component.html',
  styleUrls: ['./taskitem.component.css']
})

export class TaskitemComponent implements OnInit {
  @Input()task:Taskinterface={id:1,text:"",remember:false,date:""};
  @Output()btnClickTask=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.btnClickTask.emit;
  }

}
