import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { InputTodoComponent } from './input-todo/input-todo.component';
import { NavTodoComponent } from './nav-todo/nav-todo.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { FooterTodoComponent } from './footer-todo/footer-todo.component';
import { TodosFilterPipe } from './todos-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    InputTodoComponent,
    NavTodoComponent,
    ListTodoComponent,
    FooterTodoComponent,
    TodosFilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
