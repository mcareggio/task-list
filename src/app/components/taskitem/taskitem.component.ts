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
  @Output()btnClickDelete:EventEmitter<Taskinterface>=new EventEmitter();
  @Output()btnDoubleClickReminderO:EventEmitter<Taskinterface>=new EventEmitter();
  public faTimes=faTimes;

  constructor() { }

  ngOnInit(): void {
  }
  btnClickDel(task:Taskinterface){
    this.btnClickDelete.emit(task);
  }
  btnDoubleClickReminder(task:Taskinterface){
    this.btnDoubleClickReminderO.emit(task);
  }
}
