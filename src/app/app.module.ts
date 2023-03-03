import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddComponent } from './add/add.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TodoListPreviewComponent } from './todo-list-preview/todo-list-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    AddComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'todo-list', component: TodoListComponent},
      {path: 'todo-list/:id', component: TodoListPreviewComponent},
      {path: 'add', component: AddComponent},
      
      {path: '', redirectTo: 'todo-list', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
