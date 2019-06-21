import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './interface-todo';
import { TabStates } from './interface-tabs';

@Pipe({
  name: 'todosFilter'
})
export class TodosFilterPipe implements PipeTransform {
  transform(todos: Todo[], tabState: TabStates): Todo[] {
    if(tabState === 'All') return todos;
    else if(tabState === 'Active') return todos.filter(todo => !todo.completed);
    return todos.filter(todo => todo.completed);
  }
}
