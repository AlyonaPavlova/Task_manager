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
    if(this.item.done) {
      this.item.done = false
      document.getElementById('button_done').innerHTML = "Done"
    }
    else {
      this.item.done = true
      document.getElementById('button_done').innerHTML = "Cancel"
    }
    localStorage.setItem(this.item.id.toString(), JSON.stringify(this.item))
  }

  oneDelete() {
    this.deleteTask.emit(this.item)
  }
}
