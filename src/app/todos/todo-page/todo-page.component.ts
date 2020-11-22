import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit {

  complete: boolean = false;

  constructor(private store: Store<AppState>) { }

  toggleAll() {
    this.complete = !this.complete;
    this.store.dispatch(actions.toggleAll({completed: this.complete}));
  }

  ngOnInit() {
  }

}
