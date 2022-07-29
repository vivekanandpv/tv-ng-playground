import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  AppState,
  counterSelector,
  decrement,
  increment,
} from './counter.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  counter$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.counter$ = this.store.select(counterSelector);
  }

  handleIncrement() {
    this.store.dispatch(increment());
  }

  handleDecrement() {
    this.store.dispatch(decrement());
  }
}
