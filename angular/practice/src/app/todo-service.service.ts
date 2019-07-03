import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Todo } from './todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  appUrl = environment.appUrl;

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Todo[]>(this.appUrl)
  }

  create(payLoad: Todo) {
    return this.http.post<Todo[]>(this.appUrl, payLoad)
  }

  delete(id: number) {
    return this.http.delete<Todo[]>(`${this.appUrl}/${id}`)
  }

  toggle(id: number, completed: boolean) {
    return this.http.patch<Todo[]>(`${this.appUrl}/${id}`, { completed })
  }

  toggleAll(completed: boolean) {
    return this.http.patch<Todo[]>(this.appUrl, { completed })
  }

  completedDelete() {
    return this.http.delete<Todo[]>(`${this.appUrl}/completed`)
  }
}
