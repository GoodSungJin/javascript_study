import { Component, Input, Output, EventEmitter } from '@angular/core';
import { navState } from '../nav.type';

@Component({
  selector: 'app-todo-nav',
  templateUrl: './todo-nav.component.html',
  styleUrls: ['./todo-nav.component.css']
})
export class TodoNavComponent {
  @Input() navStatesData: navState[];
  @Input() navStateData: navState;

  @Output() sendState = new EventEmitter();
}
