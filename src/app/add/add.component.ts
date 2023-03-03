import { Component } from '@angular/core';
import { Item } from '../todo-list/item';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  description: string = '';

  constructor(private todoService: TodoService) {}

  addItem(): void {
    const item: Item = { description: this.description, id: Math.random().toString()  };
    this.todoService.addItem(item);
    this.description = '';
  }
}