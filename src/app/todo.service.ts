import { Injectable } from '@angular/core';
import { Item } from './todo-list/item';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private allItems: Item[] = [
    { description: 'todo1', id: Math.random().toString() },
    { description: 'todo2', id: Math.random().toString() },
    { description: 'todo3', id: Math.random().toString() },
  ];

  get items(): Item[] {
    return this.allItems;
  }

  addItem(item: Item): void {
    this.allItems.push(item);
  }

  findItem(id: string | null): string | null {
    let match = this.allItems.find((item) => item.id === id);
    if (match !== undefined) {
      return match.description;
    } else {
      return null;
    }
  }
}
