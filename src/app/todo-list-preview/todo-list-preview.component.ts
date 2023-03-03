import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-todo-list-preview',
  template: `<h2>Selected todo: {{todoDescription}} {{todoId}}</h2>`
  
})
export class TodoListPreviewComponent {
  todoId : string | null;
  todoDescription : string | null;

  constructor(private todoService: TodoService, private route: ActivatedRoute) {
    this.todoId = null;
    this.todoDescription = null;
  }

  ngOnInit() {
    this.todoId = this.route.snapshot.paramMap.get('id') ?? null;
    this.todoDescription = this.todoService.findItem(this.todoId);
  }
}
