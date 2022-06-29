import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl:string = 'http://localhost:3000/tasks'; 

  constructor(private httpClient: HttpClient) { }

  getTask():Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.apiUrl);
  }

  addTask(task:Task):Observable<Task> {
    return this.httpClient.post<Task>(this.apiUrl, task);
  }

  deleteTask(task:Task):Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.httpClient.delete<Task>(url);
  }
}
