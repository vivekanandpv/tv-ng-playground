import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import {
  loadTodos,
  loadTodosFailure,
  loadTodosSuccess,
  Todo,
} from './todo.actions';

@Injectable({
  providedIn: 'root',
})
export class TodoEffects {
  constructor(private actions$: Actions, private httpClient: HttpClient) {}

  loadTodos$ = createEffect(() => {
    return this.actions$.pipe(
      tap((t) => console.log('in effect', t)),
      ofType(loadTodos),
      mergeMap((a) => {
        return this.httpClient
          .get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
          .pipe(
            map((data) => {
              return loadTodosSuccess({
                todos: data,
              });
            }),
            catchError((error) => {
              return of(loadTodosFailure({ error: error.message }));
            })
          );
      })
    );
  });
}
