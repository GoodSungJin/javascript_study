import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-footer-todo',
  template: `
    <div class="footer">
      <div class="complete-all">
        <input class="custom-checkbox" type="checkbox" id="ck-complete-all" [checked]="checkCheck" (change)="cheakAll.emit($event.target.checked)">
        <label for="ck-complete-all">Mark all as complete</label>
      </div>
      <div class="clear-completed">
        <button class="btn" (click)="removeTodo.emit()">Clear completed (<span class="completed-todos">{{countComplete}}</span>)
        </button>
        <strong class="active-todos">{{countActive}}</strong> items left
      </div>
    </div>
  `,
  styleUrls: ['./footer-todo.component.css']
})
export class FooterTodoComponent {
  @Output() cheakAll = new EventEmitter();
  @Output() removeTodo = new EventEmitter();
  @Input() countActive: number;
  @Input() countComplete: number;
  @Input() checkCheck: number;
}
