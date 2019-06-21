import { Component, ViewEncapsulation } from '@angular/core';
import { Todo } from '../interface-todo';
import { TabStates } from '../interface-tabs';

@Component({
  selector: 'app-todos',
  template: `
    <div class="container">
      <h1 class="title">Todos</h1>
      <div class="ver">5.0</div>

      <input class="input-todo" placeholder="What needs to be done?" autofocus (keyup.enter)="addTodo($event.target)">

      <ul class="nav">
        <li *ngFor="let tab of tabs" [class.active]="tab === tabState" (click)="tabState = tab">{{tab}}</li>
      </ul>

      <ul class="todos" *ngIf="todos; else loading">
        <li class="todo-item" *ngFor="let todo of todos | todosFilter : tabState">
          <input class="custom-checkbox" type="checkbox" id="ck-{{todo.id}}" [checked]="todo.completed" (change)="changeCk(todo.id)">
          <label for="ck-{{todo.id}}">{{todo.content}}</label>
          <i class="remove-todo far fa-times-circle" (click)="deleteTodo(todo.id)"></i>
        </li>
      </ul>
      <ng-template #loading>Loading...</ng-template>

      <div class="footer">
      <div class="complete-all">
        <input class="custom-checkbox" type="checkbox" id="ck-complete-all" [checked]="checkCheck" (change)="checkAll($event.target.checked)">
        <label for="ck-complete-all">Mark all as complete</label>
      </div>
      <div class="clear-completed">
        <button class="btn" (click)="removeTodo()">Clear completed (<span class="completed-todos">{{countComplete}}</span>)
        </button>
        <strong class="active-todos">{{countActive}}</strong> items left
      </div>
    </div>
  `,
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos: Todo[] = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'Javascript', completed: false }
  ];

  tabs: TabStates[] = ['All', 'Active', 'Complete'];

  tabState = 'All';

  // todo 추가
  addTodo(elem: HTMLInputElement) {
    this.todos = [...this.todos, { id: this.generateId(), content: elem.value, completed: false}]
    elem.value = '';
  }

  // 아이디 자동 만들기
  generateId() {
    return this.todos.length ? Math.max(...this.todos.map(todo => todo.id)) + 1 : 1;
  }

  // 체크박스 상태변화
  changeCk(id: number) {
    this.todos = this.todos.map(todo => {
      if (id !== todo.id) return todo;
      return {...todo, completed: !todo.completed}
    })
  }

  // completed 카운트
  get countComplete() {
    return this.todos.filter(todo => todo.completed).length;
  }

  // active 카운트
  get countActive() {
    return this.todos.filter(todo => !todo.completed).length;
  }
  
  // 전체 체크
  checkAll(ck: boolean) {
    this.todos = this.todos.map(todo => {
      return ck ? {...todo, completed: true} : {...todo, completed: false};
    })
  }

  // completed 삭제
  removeTodo() {
    this.todos = this.todos.filter(todo => !todo.completed);
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => id !== todo.id);
  }

  get checkCheck() {
    return this.todos.every(todo => todo.completed);
  }
}
