import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TabStates } from '../interface-tabs';

@Component({
  selector: 'app-nav-todo',
  template: `
    <ul class="nav">
      <li *ngFor="let tab of tabsData" [class.active]="tab === tabStateData" (click)="changeTabState.emit(tab)">{{tab}}</li>
    </ul>
  `,
  styleUrls: ['./nav-todo.component.css']
})
export class NavTodoComponent {
  @Input() tabsData: TabStates[];
  @Input() tabStateData: string;
  @Output() changeTabState = new EventEmitter();
}
