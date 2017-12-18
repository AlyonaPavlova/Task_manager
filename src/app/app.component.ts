import { Component } from '@angular/core';
import { Item } from "./task.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public items: Item[]=[];
  public filterAddTask = '';
  public key = '';
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

  onAdd(item: Item) {
    this.items.push(item)
  }

  onDelete(item: Item) {
    localStorage.removeItem(item.id.toString());
    this.items = this.items.filter(i => i.id !== item.id)
  }
}

