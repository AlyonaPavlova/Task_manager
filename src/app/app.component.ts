import { Component } from '@angular/core';
import {Item, Items} from "./task.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public items: Item[] = [
    new Item ('Make buy', 'Tomatoes, cheese, milk', '3 days ago', false),
    new Item ('Fix the door', 'Do not forget to buy a new lock', '2 days ago', false)
  ]

  onAdd(item: Item) {
    this.items.push(item)
  }
}
