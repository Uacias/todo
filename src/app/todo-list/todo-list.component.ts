import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { Item } from './item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent {
  constructor(private todoService: TodoService) { }

  get items(): Item[] {
    return this.todoService.items;
  }

}
