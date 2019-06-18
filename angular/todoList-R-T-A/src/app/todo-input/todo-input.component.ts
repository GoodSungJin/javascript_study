import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  template: `
    <input type="text" placeholder="enter todo..." (keyup.enter)="addTodo(input)" #input>
  `,
  styles: []
})
export class TodoInputComponent {
  @Output() add = new EventEmitter;
  
  addTodo(input: HTMLInputElement) {
    this.add.emit(input.value);
    input.value = '';
  }

}
