import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.module';
import { counterSelector, increment } from '../counter.reducer';
import { languageSelector } from '../language.reducer';
import {
  loadTodos,
  Todo,
  todoErrorMessageSelector,
  todoSelector,
} from '../todo.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  counter$: Observable<number>;
  language$: Observable<string>;
  todos$: Observable<Todo[]>;
  todoErrorMessage$: Observable<string | null>;

  constructor(private store: Store<AppState>) {
    this.counter$ = this.store.select(counterSelector);
    this.language$ = this.store.select(languageSelector);
    this.todos$ = this.store.select(todoSelector);
    this.todoErrorMessage$ = this.store.select(todoErrorMessageSelector);
  }

  handleIncrement() {
    this.store.dispatch(increment());
  }

  handleDecrement() {
    this.store.dispatch(loadTodos());
  }
}
