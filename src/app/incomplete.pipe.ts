import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'incomplete'
})
export class IncompletePipe implements PipeTransform {

  transform(todos: any[], showAll: boolean): any {
    if (showAll) {
      return todos;
    }

    return todos.filter(todo => !todo.completed);
  }
}
