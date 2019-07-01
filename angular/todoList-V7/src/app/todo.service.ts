import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Todo } from './interface-todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  appUrl = environment.appUrl;

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Todo[]>(this.appUrl);
  }

  create(todo: Todo) {
    return this.http.post<Todo[]>(this.appUrl, todo);
  }

  toggle(id: number, completed: boolean) {
    return this.http.patch<Todo[]>(`${this.appUrl}/${id}`, { completed });
  }

  toggleAll(completed: boolean) {
    return this.http.patch<Todo[]>(this.appUrl, { completed });
  }

  completedRemove() {
    return this.http.delete<Todo[]>(`${this.appUrl}/completed`);
  }

  delete(id: number) {
    return this.http.delete<Todo[]>(`${this.appUrl}/${id}`);
  }
}
