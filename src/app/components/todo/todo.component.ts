import { Task } from './../../model/task';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  @Input() todos?: Task[];
  @Output() taskEmit = new EventEmitter<Task>();
  @Output() taskDoneEmit = new EventEmitter<Task>();

  constructor() {}

  ngOnInit(): void {}

  removeTask(task: Task) {
    this.taskEmit.emit(task);
  }
}
