import { Injectable } from '@angular/core';
import { Taskinterface } from './models/taskinterface';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';
import { identifierName } from '@angular/compiler';
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

  newTask(task:Taskinterface):Observable<Taskinterface>{
    return this.http.post<Taskinterface>(this.httpUrl,task,httpOption);
  }
  /*
  getNextId():Observable<number>{
    let id:number=0;
    let this.getTasks();
    //terminar el service
    return id;
  }*/
}
