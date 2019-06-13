import { Component } from '@angular/core';

interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  template: `
    <input type="text" (keyup.enter)="addTodo(input)" #input>
    <ul>
      <li *ngFor="let todo of todos">
        <input type="checkbox" [checked]="todo.completed" (change)="toggleCheck(todo.id)">
        <span [class.completed]="todo.completed">{{todo.content}}</span>
        <button (click)="removeTodo(todo.id)">X</button>
      </li>
    </ul>
    <pre>{{todos | json}}</pre>
  `,
  styles: [`
    .completed {
      text-decoration: line-through;
    }
  `]
})
export class AppComponent {
  todos: Todo[];

  constructor() {
    this.todos = [
      { id: 1, content: 'HTML', completed: true }
    ]

  }

  addTodo(input: HTMLInputElement) {
    this.todos = [...this.todos, { id: this.makeId(), content: input.value, completed: false }];
    input.value = '';
  }

  
  toggleCheck(id: number) {
    this.todos = this.todos.map(todo => {
      return todo.id === id ? { ...todo, completed: !todo.completed } : todo
    })
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  makeId() {
    return this.todos.length ? Math.max(...this.todos.map(todo => todo.id)) + 1 : 1;
  }
}
