import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tabs } from '../interface-tabs';

@Component({
  selector: 'app-nav-todo',
  template: `
    <ul class="nav">
      <li *ngFor="let tab of tabsData" [class.active]="tab.content === tabStateData" (click)="changeTabState.emit(tab.content)">{{tab.content}}</li>
    </ul>
  `,
  styleUrls: ['./nav-todo.component.css']
})
export class NavTodoComponent {
  @Input() tabsData: Tabs[];
  @Input() tabStateData: string;
  @Output() changeTabState = new EventEmitter();

}
