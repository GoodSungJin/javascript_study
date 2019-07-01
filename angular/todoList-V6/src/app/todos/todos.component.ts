import { Component, ViewEncapsulation } from '@angular/core';
import { Todo } from '../interface-todo';
import { TabStates } from '../interface-tabs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todos',
  template: `
    <div class="container">
      <h1 class="title">Todos</h1>
      <div class="ver">6.0</div>
      <app-input-todo (addTodo)="addTodo($event)"></app-input-todo>
      <app-nav-todo [tabsData]="tabs" [tabStateData]="tabState" (changeTabState)="tabState = $event"></app-nav-todo>
      <app-list-todo [todosData]="todos" [tabStateData]="tabState" (toggleCheck)="changeCk($event)" (deleteTodo)="deleteTodo($event)"></app-list-todo>
      <app-footer-todo (cheakAll)="checkAll($event)" (removeTodo)="removeTodo()" [countActive]="countActive" [countComplete]="countComplete" [checkCheck]="checkCheck"></app-footer-todo>
    </div>
    <pre>{{ todos | json }}</pre>
  `,
  styleUrls: ['./todos.component.css'],

  encapsulation: ViewEncapsulation.None
})
export class TodosComponent {
  todos: Todo[];

  tabs: TabStates[] = ['All', 'Active', 'Complete'];

  tabState = 'All';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Todo[]>('http://localhost:4500/todos')
      .subscribe(todos => this.todos = todos)
  }

  getTodos() {
    this.http.get<Todo[]>('http://localhost:4500/todos')
      .subscribe(todos => this.todos = todos)
  }

  // todo 추가
  addTodo(elem: HTMLInputElement) {
    this.http.post<Todo>('http://localhost:4500/todos', { id: this.generateId(), content: elem.value, completed: false})
      .subscribe(() => this.getTodos())
    elem.value = '';
  }

  // 아이디 자동 만들기
  generateId() {
    return this.todos.length ? Math.max(...this.todos.map(todo => todo.id)) + 1 : 1;
  }

  // 체크박스 상태변화
  changeCk(id: number) {
    this.http.patch(`http://localhost:4500/todos/${id}`, { completed: !this.todos.find(todo => todo.id === id).completed})
      .subscribe(() => this.getTodos())
  }

  // completed 카운트
  get countComplete() {
    if(!this.todos) return;
    return this.todos.filter(todo => todo.completed).length;
  }

  // active 카운트
  get countActive() {
    if(!this.todos) return;
    return this.todos.filter(todo => !todo.completed).length;
  }
  
  // 전체 체크
  checkAll(ck: boolean) {
    this.http.patch(`http://localhost:4500/todos`, { completed: ck })
      .subscribe(() => this.getTodos())
  }

  // completed 삭제
  removeTodo() {
    this.http.delete(`http://localhost:4500/todos/completed`)
      .subscribe(() => this.getTodos())
  }

  deleteTodo(id: number) {
    this.http.delete(`http://localhost:4500/todos/${id}`)
      .subscribe(() => this.getTodos())
  }

  get checkCheck() {
    if(!this.todos) return;
    return this.todos.every(todo => todo.completed);
  }
}
