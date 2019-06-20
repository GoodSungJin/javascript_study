import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms/';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { InputTodoComponent } from './input-todo/input-todo.component';
import { NavTodoComponent } from './nav-todo/nav-todo.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { FooterTodoComponent } from './footer-todo/footer-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    InputTodoComponent,
    NavTodoComponent,
    ListTodoComponent,
    FooterTodoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
