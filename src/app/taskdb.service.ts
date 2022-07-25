import { Injectable } from '@angular/core';
import { Taskinterface } from './models/taskinterface';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';
const httpOption={
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})


export class TaskdbService {
  public tasks: Taskinterface[]=[];
  private httpUrl: string="http://localhost:5000/tasks";
  constructor(private http:HttpClient) {    
  }

  getTasks():Observable<Taskinterface[]>{
    return this.http.get<Taskinterface[]>(this.httpUrl);
  }
  deleteTask(task:Taskinterface):Observable<Taskinterface>{
    const url_del=this.httpUrl+"/"+task.id;
    
    return this.http.delete<Taskinterface>(url_del);
  }
  updateTask(task:Taskinterface):Observable<Taskinterface>{
    const url_del=this.httpUrl+"/"+task.id;
    
    return this.http.put<Taskinterface>(url_del,task,httpOption);
  }

}
