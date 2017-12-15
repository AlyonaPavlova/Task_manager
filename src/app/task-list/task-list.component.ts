import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Item} from "../task.model";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  @Input() item: Item
  @Output() deleteTask = new EventEmitter<Item>()

  oneDone() {
    this.item.done = true
  }

  oneDelete() {
    this.deleteTask.emit(this.item)
  }
}
