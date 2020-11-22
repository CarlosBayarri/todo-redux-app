import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { valid_filters } from '../../filter/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public filter: valid_filters;

  public todos: Todo[] = [];

  constructor(private store: Store<AppState>) {
   }

  ngOnInit() {
      //this.store.select('todos').subscribe(todos => this.todos = todos);
      this.store.subscribe(({todos, filter}) => {
        this.todos = todos;
        this.filter = filter;
      })
  }

}
