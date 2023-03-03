import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListPreviewComponent } from './todo-list-preview.component';

describe('TodoListPreviewComponent', () => {
  let component: TodoListPreviewComponent;
  let fixture: ComponentFixture<TodoListPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
