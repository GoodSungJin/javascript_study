import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './todo.interface';
import { navState } from './nav.type';

@Pipe({
  name: 'todoFilter'
})
export class TodoFilterPipe implements PipeTransform {

  transform(todos: Todo[], navState: navState): Todo[] {
    if (navState === "All") return todos;
    else if (navState === "Active") return todos.filter(todo => !todo.completed);
    return todos.filter(todo => todo.completed);
  }

}
