import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { valid_filters, setFilter } from '../../filter/filter.actions';
import { deleteAll } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {

  public filter: valid_filters = 'all';
  public filters: valid_filters[] = ['all', 'completed', 'pending'];
  public pendings: number = 0;


  constructor(private store: Store<AppState>) { }

  setFilter(eachFilter) {
  this.store.dispatch(setFilter({filter: eachFilter}));
  }
  deleteAll() {
    this.store.dispatch(deleteAll());
  }
  ngOnInit() {
    /*this.store.select('filter').subscribe(filter => {
      this.filter = filter;
    });*/
    this.store.subscribe(state => {
      this.filter = state.filter;
      this.pendings = state.todos.filter(todo => !todo.completed).length;
    });
  }

}
