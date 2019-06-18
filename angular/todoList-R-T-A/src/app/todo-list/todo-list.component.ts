import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  template: `
    <ul>
      <li *ngFor="let todo of Todos">
        <input type="checkbox" [checked]="todo.completed" (change)="chageCheck(todo.id)">
        <span [class.line-th]="todo.completed">{{todo.content}}</span>
        <button (click)="removeTodo(todo.id)">X</button>
      </li>
    </ul>
    <pre>{{ Todos | json }}</pre>
  `,
  styles: [`
    .line-th {
      text-decoration: line-through;
    }
  `]
})
export class TodoListComponent  {
  @Input() Todos;
  @Output() chageCh = new EventEmitter;
  @Output() remove = new EventEmitter;

  chageCheck(id: number) {
    this.chageCh.emit(id);
  }

  removeTodo(id: number) {
    this.remove.emit(id);
  }
}
