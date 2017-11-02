import { Todo } from './../model/todo';
import { TodoService } from './../todo.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [TodoService]
})
export class TodoListComponent implements OnInit {

  todos = [];

  selectedTodo = null;
  editTodo = null;
  showDetail = false;
  showAll = false;

  public getNumberOfTodos(): number {
    let count = 0;

    this.todos.forEach(todo => {
      if (!todo.completed) {
        count++;
      }
    });

    return count;
  }

  public displayTodo(todo): void {
    this.selectedTodo = todo;
    this.showDetail = true;
  }

  public displayTable(): void {
    this.selectedTodo = null;
    this.editTodo = null;
    this.showDetail = false;
  }

  public displayEditTodo(todo): void {
    this.showDetail = false;
    this.editTodo = todo;
  }

  public styleCount(): string {
    const incompleteCount = this.getNumberOfTodos();
    if (incompleteCount < 5) {
      return 'green';
    } else if (incompleteCount >= 5 && incompleteCount < 10) {
      return 'yellow';
    } else {
      return 'red';
    }
  }

  public styleTodo(todo): string {
   return todo.completed ? 'strikethrough' : '';
  }

  //CRUD OPS
  public getTodos(): void {
    this.todoService.getTodos().subscribe(
      data => this.todos = data // success handler function
    );
  }

  public createTodo(form): void {
    const todo: any = {};
    todo.task = form.value.task;
    todo.completed = false;
    todo.description = '';

    this.todoService.createTodo(todo).subscribe(
      data => this.todos = this.todos.concat(data),
      error => console.error(error)
    );

    form.reset();
  }

  public updateTodoFromForm(form): void {
    const todo: any = {};
    todo.task = form.value.task;
    todo.completed = false;
    todo.description = '';

    this.todoService.updateTodo(todo).subscribe(
      data => this.getTodos()
    );

    form.reset();
  }

  public updateTodo(todo): void {
    this.todoService.updateTodo(todo).subscribe(
      data => this.getTodos()
    );
  }

  public destroyTodo(todo): void {
    // const this = this;
    this.todoService.destroyTodo(todo).subscribe(
      data => this.getTodos()
    );
  }

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTodos();
  }

}
