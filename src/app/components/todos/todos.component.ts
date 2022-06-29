import { Task } from './../../model/task';
import { TaskService } from './../../services/task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTask().subscribe(tasks => this.todos = tasks);
  }

  clearTasks():void {
    this.todos = [];
  }

  addTodo(task:Task):void {
    this.taskService.addTask(task).subscribe(task => this.todos.unshift(task));
    
  }

  removeTodo(task:Task):void {
    this.taskService.deleteTask(task)
      .subscribe(
        () => this.todos = this.todos.filter(t => t.id !== task.id)
      )
  }
}
