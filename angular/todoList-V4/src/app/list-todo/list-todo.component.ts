import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../interface-todo';

@Component({
  selector: 'app-list-todo',
  template: `
    <ul class="todos">
      <li id="{{todo.id}}" class="todo-item" *ngFor="let todo of todosData">
        <input class="custom-checkbox" type="checkbox" id="ck-{{todo.id}}" [checked]="todo.completed" (change)="toggleCheck.emit(todo.id)">
        <label for="ck-{{todo.id}}">{{todo.content}}</label>
        <i class="remove-todo far fa-times-circle"></i>
      </li>
    </ul>
  `,
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent{
  @Input() todosData: Todo[];
  @Output() toggleCheck = new EventEmitter();

}
