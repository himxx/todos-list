import { Task } from './../../model/task';
import { TaskService } from './../../services/task.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Task[] = [];
  @Input() editMode!:boolean;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTask().subscribe((tasks) => (this.todos = tasks));
    this.sortTasks();
  }

  addTodo(task: Task): void {
    this.taskService
      .addTask(task)
      .subscribe((task) => this.todos.unshift(task));
      this.sortTasks();
  }

  markTaskAsDone(task: Task) {
    task.done = true;
    this.taskService.updateTaskDone(task).subscribe();
    this.sortTasks();
  }

  removeTodo(task: Task): void {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.todos = this.todos.filter((t) => t.id !== task.id))
      );
      this.sortTasks();
  }

  deleteAll() {
    this.todos.forEach((task) => {
      this.removeTodo(task);
    });
  }

  private sortTasks() {
    this.todos = this.todos.sort((a:Task, b:Task) => 
      a.done === b.done ? 0 : a.done ? 1 : -1
    )
  }
}
