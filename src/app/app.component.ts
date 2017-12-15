import { Component } from '@angular/core';
import {Item, Items} from "./task.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public items: Item[] = [
    new Item ('Make buy', 'Tomatoes, cheese, milk', '10.12.17', false, 1),
    new Item ('Fix the door', 'Do not forget to buy a new lock', '11.12.17', false, 2)
  ]

  onAdd(item: Item) {
    this.items.push(item)
  }

  onDelete(item: Item) {
    this.items = this.items.filter(i => i.id !== item.id)
  }
}

