import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.interface';
import { TodoServiceService } from '../todo-service.service';
import { navState } from '../nav.type';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {
  todos: Todo[];
  navState: navState = "All";
  navStates = ["All", "Active", "Completed"];

  constructor(private todoService: TodoServiceService) { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getAll()
      .subscribe(todos => this.todos = todos)
  }

  addTodo(content: string) {
    const payLoad = { id: this.generateId(), content, completed: false };
    this.todoService.create(payLoad)
      .subscribe(todos => this.todos = todos)
  }

  generateId() {
    return this.todos.length ? Math.max(...this.todos.map(todo => todo.id)) + 1 : 1;
  }

  removeTodo(id: number) {
    this.todoService.delete(id)
      .subscribe(todos => this.todos = todos)
  }

  toggleCheck(id: number) {
    const completed = !this.todos.find(todo => todo.id === id).completed

    this.todoService.toggle(id, completed)
      .subscribe(todos => this.todos = todos)
  }

  toggleAll(completed: boolean) {
    this.todoService.toggleAll(completed)
      .subscribe(todos => this.todos = todos)
  }

  removeCompleted() {
    this.todoService.completedDelete()
      .subscribe(todos => this.todos = todos)
  }

  countCompleted() {
    if (!this.todos) return;
    return this.todos.filter(todo => todo.completed).length;
  }
  countActive() {
    if (!this.todos) return;
    return this.todos.filter(todo => !todo.completed).length;
  }

  isAllChecked() {
    if (!this.todos) return;
    return this.todos.every(todo => todo.completed);
  }
}
