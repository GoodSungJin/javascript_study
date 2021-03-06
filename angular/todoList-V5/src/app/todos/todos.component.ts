import { Component, ViewEncapsulation } from '@angular/core';
import { Todo } from '../interface-todo';
import { TabStates } from '../interface-tabs';

@Component({
  selector: 'app-todos',
  template: `
    <div class="container">
      <h1 class="title">Todos</h1>
      <div class="ver">5.0</div>
      <app-input-todo (addTodo)="addTodo($event)"></app-input-todo>
      <app-nav-todo [tabsData]="tabs" [tabStateData]="tabState" (changeTabState)="tabState = $event"></app-nav-todo>
      <app-list-todo [todosData]="todos" [tabStateData]="tabState" (toggleCheck)="changeCk($event)" (deleteTodo)="deleteTodo($event)"></app-list-todo>
      <app-footer-todo (cheakAll)="checkAll($event)" (removeTodo)="removeTodo()" [countActive]="countActive" [countComplete]="countComplete" [checkCheck]="checkCheck"></app-footer-todo>
    </div>
  `,
  styleUrls: ['./todos.component.css'],

  encapsulation: ViewEncapsulation.None
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
