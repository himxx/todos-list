import { Task } from './../../model/task';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() newTaskEmit = new EventEmitter<Task>();

  task:Task = {
    text:'',
    date:'',
    done:false
  }

  constructor() { }

  ngOnInit(): void {
  }

  addTodo() {
    this.newTaskEmit.emit(this.task);
    this.task = {
      text:'',
      date:'',
      done:false
    }
  }
}
