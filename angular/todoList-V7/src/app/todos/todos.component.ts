import { Component, ViewEncapsulation } from '@angular/core';
import { Todo } from '../interface-todo';
import { TabStates } from '../interface-tabs';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  template: `
    <div class="container">
      <h1 class="title">Todos</h1>
      <div class="ver">6.0</div>
      <app-input-todo (addTodo)="addTodo($event)"></app-input-todo>
      <app-nav-todo [tabsData]="tabs" [tabStateData]="tabState" (changeTabState)="tabState = $event"></app-nav-todo>
      <app-list-todo [todosData]="todos" [tabStateData]="tabState" (toggleCheck)="changeCk($event)" (deleteTodo)="deleteTodo($event)"></app-list-todo>
      <app-footer-todo (cheakAll)="checkAll($event)" (removeTodo)="completedRemove()" [countActive]="countActive" [countComplete]="countComplete" [checkCheck]="checkCheck"></app-footer-todo>
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

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getAll()
      .subscribe(todos => this.todos = todos)
  }

  // todo 추가
  addTodo(content: string) {
    const payLoad = { id: this.generateId(), content, completed: false };

    this.todoService.create(payLoad)
      .subscribe(todos => this.todos = todos)
  }

  // 아이디 자동 만들기
  generateId() {
    return this.todos.length ? Math.max(...this.todos.map(todo => todo.id)) + 1 : 1;
  }

  // 체크박스 상태변화
  changeCk(id: number) {
    const completed = !this.todos.find(todo => todo.id === id).completed;

    this.todoService.toggle(id, completed)
      .subscribe(todos => this.todos = todos)
  }

  // completed 카운트
  get countComplete() {
    if (!this.todos) return;
    return this.todos.filter(todo => todo.completed).length;
  }

  // active 카운트
  get countActive() {
    if (!this.todos) return;
    return this.todos.filter(todo => !todo.completed).length;
  }

  // 전체 체크
  checkAll(ck: boolean) {
    this.todoService.toggleAll(ck)
      .subscribe(todos => this.todos = todos)
  }

  // completed 삭제
  completedRemove() {
    this.todoService.completedRemove()
      .subscribe(todos => this.todos = todos)
  }

  // todo 삭제
  deleteTodo(id: number) {
    this.todoService.delete(id)
      .subscribe(todos => this.todos = todos)
  }

  get checkCheck() {
    if (!this.todos) return;
    return this.todos.every(todo => todo.completed);
  }
}
