import { Component } from '@angular/core';
import { Todos } from './todo.interface';

@Component({
  selector: 'app-todos',
  template: `
    <app-todo-input (add)="addTodo($event)"></app-todo-input>
    <app-todo-list [Todos]="todos" (chageCh)="chageCheck($event)" (remove)="removeTodo($event)"></app-todo-list>
  `,
  styles: []
})
export class TodosComponent {
  todos: Todos[] = [
    { id: 1, content: 'HTML', completed: false},
    { id: 2, content: 'CSS', completed: true},
    { id: 3, content: 'JavaScript', completed: false}
  ]

  addTodo(content: string) {
    this.todos = [...this.todos, { id: this.makeId(), content, completed: false }];
  }

  makeId() {
    return this.todos.length ? Math.max(...this.todos.map(todo => todo.id)) + 1 : 1;
  }

  chageCheck(id: number) {
    this.todos.forEach(todo => {
      if (id === todo.id) todo.completed = !todo.completed;
    })
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(todo => id !== todo.id);
  }

}
