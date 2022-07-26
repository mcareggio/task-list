import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup,Validator,FormBuilder, Validators } from '@angular/forms';
import { TaskdbService } from 'src/app/taskdb.service';
import { Taskinterface } from 'src/app/models/taskinterface';
import { TasklistComponent } from '../tasklist/tasklist.component';
import { TasklistservService } from 'src/app/tasklistserv.service';
@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  @Output()changeAddTaskPanelEmmiter=new EventEmitter();
  formularioAddtask : FormGroup;
  
  constructor(private formBuilder:FormBuilder,private taskdbService:TaskdbService,private taskLitServ:TasklistservService) { 
    this.formularioAddtask=this.formBuilder.group({
      task:['',Validators.required],
      date:['',Validators.required],
      time:['',Validators.required],
      reminder:[true,]
    })
  
  }

  ngOnInit(): void {  }
  get TextoTarea(){
    return this.formularioAddtask.get("task");
  }
  get HoraTarea(){
    return this.formularioAddtask.get("time");
  }
  get FechaTarea(){
    return this.formularioAddtask.get("date");
  }
  private taskBuilderFromForm():Taskinterface{
    let task:Taskinterface={
      id:null,
      text:this.formularioAddtask.get("task")?.value,
      date:this.formularioAddtask.get("date")?.value+" "+this.formularioAddtask.get("time")?.value,
      remember:this.formularioAddtask.get("reminder")?.value
    };
    return task;
  }
  onEnviar(event:Event){
    event.preventDefault;
    if(this.formularioAddtask.valid){
      
      console.log(this.taskBuilderFromForm());
      this.taskdbService.newTask(this.taskBuilderFromForm()).subscribe(()=>{
        this.taskLitServ.changeTaskList(this.taskBuilderFromForm());
        this.changeAddTaskPanelEmmiter.emit();
      });
      
    }
    else{
      this.formularioAddtask.markAllAsTouched();
    }
  }
}
