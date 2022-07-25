import { Component, OnInit } from '@angular/core';
import { TaskdbService } from 'src/app/taskdb.service';
import { Taskinterface } from 'src/app/models/taskinterface';
@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
  public tasks:Taskinterface[];
 
  constructor(private taskService:TaskdbService) { 
    this.tasks=[];
  }

  ngOnInit(): void {
    //this.tasks=[{id:1,text:"sa",remember:false,date:"as"}];
    this.taskService.getTasks().subscribe(task=>
      this.tasks=task);
  }

}
