import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  txtInput: FormControl;

  constructor(private store: Store<AppState>) { 
    this.txtInput = new FormControl('', Validators.required)
  }

  add() {
    if (!this.txtInput.valid) {
      return;
    }
    this.store.dispatch(actions.createTodo({title: this.txtInput.value}));
    this.txtInput.reset();
  }
  ngOnInit() {
  }

}
