import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-todo',
  template: `
    <input class="input-todo" placeholder="What needs to be done?" autofocus [(ngModel)]="content" (keyup.enter)="addEvent()">
  `,
  styleUrls: ['./input-todo.component.css']
})
export class InputTodoComponent {
  @Output() addTodo = new EventEmitter();
  content: string;

  addEvent() {
    const content = this.content && this.content.trim();

    this.content = '';

    if (!content) return;

    return this.addTodo.emit(content);
  }
}