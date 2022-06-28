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
}
