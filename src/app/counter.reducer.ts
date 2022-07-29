import { createAction, createReducer, createSelector, on } from '@ngrx/store';
import produce from 'immer';
import { AppState } from './app.module';

export interface CounterFeature {
  counter: number;
}

const initialCounterState: CounterFeature = {
  counter: 0,
};

export const selectCounterFn = (state: AppState) => {
  return state.counterSlice;
};

export const counterSelector = createSelector(
  selectCounterFn,
  (cf) => cf.counter
);

export const increment = createAction('[Counter] increment');

export const decrement = createAction('[Counter] decrement');

export const counterReducer = createReducer(
  initialCounterState,
  on(increment, (state) => {
    return produce(state, (d) => {
      d.counter = ++d.counter;
    });
  }),
  on(decrement, (state) => {
    return produce(state, (d) => {
      d.counter = --d.counter;
    });
  })
);
