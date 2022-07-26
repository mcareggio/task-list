import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Taskinterface } from './models/taskinterface';

@Injectable({
  providedIn: 'root'
})
export class TasklistservService {
  @Output()addTaskListEmmiter:EventEmitter<Taskinterface>=new EventEmitter();
  constructor() { }

  changeTaskList(task:Taskinterface){
    this.addTaskListEmmiter.emit(task);
  }  
}
