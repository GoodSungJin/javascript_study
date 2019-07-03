import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo.interface';
import { navState } from '../nav.type';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input() todosData: Todo[];
  @Input() navStateData: navState;
  @Output() removeTodo = new EventEmitter();
  @Output() toggleCheck = new EventEmitter();
}
