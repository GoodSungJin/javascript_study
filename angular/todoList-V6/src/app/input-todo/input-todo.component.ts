import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-todo',
  template: `
    <input class="input-todo" placeholder="What needs to be done?" autofocus (keyup.enter)="addTodo.emit($event.target)">
  `,
  styleUrls: ['./input-todo.component.css']
})
export class InputTodoComponent {
  @Output() addTodo = new EventEmitter();
}
