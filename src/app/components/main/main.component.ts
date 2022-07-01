import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  editMode: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  switchEditMode() {
    this.editMode = !this.editMode;
  }
}
