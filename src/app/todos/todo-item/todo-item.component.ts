import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as actions from '../todo.actions';
import { toggleTodo } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('inputTXT',{static:false}) inputTXT: ElementRef;
  checkCompleted: FormControl;
  txtInput: FormControl;

  editing: boolean = false;

  constructor(private store: Store<AppState>) { }

  runEdition() {
    this.editing = true;
    this.txtInput.setValue(this.todo.title);
    setTimeout(() => {
      this.inputTXT.nativeElement.select();
    }, 1);
  }
  endEdition() {
    this.editing = false;

    if (this.txtInput.invalid) return;
    if (this.txtInput.value === this.todo.title) return;

    this.store.dispatch(actions.editTodo({id: this.todo.id, title: this.txtInput.value}));

  }
  deleteTodo() {
    this.store.dispatch(actions.deleteTodo({id: this.todo.id}));
  }
  ngOnInit() {
    this.checkCompleted = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.title, Validators.required);

    this.checkCompleted.valueChanges.subscribe(value => {
      this.store.dispatch(actions.toggleTodo({id: this.todo.id}))
    })
  }

}
