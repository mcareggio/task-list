import { Component, OnInit } from '@angular/core';
import { TaskdbService } from 'src/app/taskdb.service';
import { Taskinterface } from 'src/app/models/taskinterface';
import { TasklistservService } from 'src/app/tasklistserv.service';
@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
  public tasks:Taskinterface[];
 
  constructor(private taskService:TaskdbService,private tasklistservice:TasklistservService) { 
    this.tasks=[];
  }

  ngOnInit(): void {
   this.getTasks();
   let  task={};
   this.tasklistservice.addTaskListEmmiter.subscribe(task => {
    this.tasks.push(task);
  });//Actualiza la lista cuando se agrega una tarea

  }
  togglebuttonDelete(task:Taskinterface){
    this.deleteTask(task);
  }
  togglebuttonReminder(task:Taskinterface){
    this.reminderTask(task);
  }
  private getTasks(){
    this.taskService.getTasks().subscribe(tasks=>
      this.tasks=tasks);
  }
  private deleteTask(task:Taskinterface){
    
    this.taskService.deleteTask(task).subscribe(
      ()=>{
        
        this.tasks=this.tasks.filter(t=>t.id!=task.id);
      }
    );
  }
  private reminderTask(task:Taskinterface){
    
    task.remember ? task.remember=false : task.remember=true;
    this.taskService.updateTask(task).subscribe(
      ()=>{
        console.log("Reminder TaskID"+task.id+" "+"activado");
      }
    );

  }
}
