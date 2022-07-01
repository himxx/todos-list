import { Task } from './../model/task';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl: string = 'https://todo-server-back.herokuapp.com/tasks';

  constructor(private httpClient: HttpClient) {}

  getTask(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.apiUrl);
  }

  addTask(task: Task): Observable<Task> {
    return this.httpClient.post<Task>(this.apiUrl, task);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.httpClient.delete<Task>(url);
  }

  updateTaskDone(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.httpClient.put<Task>(url, task);
  }
}
