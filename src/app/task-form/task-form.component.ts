import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Item} from "../task.model";
import * as moment from 'moment'

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  private id: number = 2
  private description = ''

  taskEnter: string = ''

  @Output() addTask = new EventEmitter<Item>()

  constructor() { }

  ngOnInit() {
  }

  onAdd() {
    if(this.taskEnter === '') return

    this.id = ++this.id

    const task = new Item(
      this.taskEnter,
      this.description,
      moment().format('DD.MM.YY'),
      false,
      this.id
    )

    const taskObj = {
      "task": this.taskEnter,
      "description": this.description,
      "date": moment().format('DD.MM.YY'),
      "done": false
    }

    const serialObj = JSON.stringify(taskObj)
    localStorage.setItem(this.id.toString(), serialObj)

    this.addTask.emit(task)
    this.taskEnter = ''

  }
}
