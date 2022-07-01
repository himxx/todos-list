import { Task } from './../../model/task';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Output() newTaskEmit = new EventEmitter<Task>();
  @Input() editMode!: boolean;
  task: Task = {
    text: '',
    date: '',
    done: false,
  };

  constructor() {}

  ngOnInit(): void {}

  addTodo() {
    this.newTaskEmit.emit(this.task);
    this.task = {
      text: '',
      date: '',
      done: false,
    };
  }
}
