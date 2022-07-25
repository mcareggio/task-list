import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Taskinterface } from 'src/app/models/taskinterface';
@Component({
  selector: 'app-taskitem',
  templateUrl: './taskitem.component.html',
  styleUrls: ['./taskitem.component.css']
})

export class TaskitemComponent implements OnInit {
  @Input()task:Taskinterface={id:1,text:"",remember:false,date:""};
  constructor() { }

  ngOnInit(): void {
  }

}
