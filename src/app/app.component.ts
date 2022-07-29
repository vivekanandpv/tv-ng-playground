import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './app.module';
import { counterSelector, decrement, increment } from './counter.reducer';
import { changeLanguage, languageSelector } from './language.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  counter$: Observable<number>;
  language$: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.counter$ = this.store.select(counterSelector);
    this.language$ = this.store.select(languageSelector);
  }

  handleIncrement() {
    this.store.dispatch(increment());
  }

  handleDecrement() {
    this.store.dispatch(decrement());
  }
}
