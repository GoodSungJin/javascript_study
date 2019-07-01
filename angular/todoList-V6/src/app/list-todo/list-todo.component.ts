import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../interface-todo';
import { TabStates } from '../interface-tabs';


@Component({
  selector: 'app-list-todo',
  template: `
    <ul class="todos" *ngIf="todosData; else loading">
      <li class="todo-item" *ngFor="let todo of todosData | todosFilter : tabStateData">
        <input class="custom-checkbox" type="checkbox" id="ck-{{todo.id}}" [checked]="todo.completed" (change)="toggleCheck.emit(todo.id)">
        <label for="ck-{{todo.id}}">{{todo.content}}</label>
        <i class="remove-todo far fa-times-circle" (click)="deleteTodo.emit(todo.id)"></i>
      </li>
    </ul>
    <ng-template #loading><div class="lds-ripple"><div></div><div></div></div></ng-template>
  `,
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent{
  @Input() todosData: Todo[];
  @Input() tabStateData: TabStates;

  @Output() toggleCheck = new EventEmitter();
  @Output() deleteTodo = new EventEmitter();

}
