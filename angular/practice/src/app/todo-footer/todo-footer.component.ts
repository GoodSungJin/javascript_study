import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent {
  @Output() toggleAll = new EventEmitter();
  @Output() removeCompleted = new EventEmitter();
  @Input() countCompleted: number;
  @Input() countActive: number;
  @Input() isAllChecked: number;

}
