import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  @Output() add = new EventEmitter();
  content: string;

  addTodo() {
    const content = this.content && this.content.trim();

    this.content = '';

    if (!content) return;

    this.add.emit(content);
  }
}
