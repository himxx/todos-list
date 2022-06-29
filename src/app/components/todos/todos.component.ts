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

  addTodo(task:Task) {
    this.taskService.addTask(task).subscribe(task => this.todos.unshift(task));
    
  }

  removeTodo(task:Task) {
    this.taskService.deleteTask(task)
      .subscribe(
        () => this.todos = this.todos.filter(t => t.id !== task.id)
      )
  }
}
