import { Injectable } from '@angular/core';
import { Taskinterface } from './models/taskinterface';
import { HttpClient,HttpHandler } from '@angular/common/http'
import { Observable } from 'rxjs';
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
}
