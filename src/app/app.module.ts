import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { CounterFeature, counterReducer } from './counter.reducer';
import { LanguageFeature, languageReducer } from './language.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { TodoEffects } from './todo.effects';
import { TodoFeature, todoReducer } from './todo.actions';
import { SampleComponent } from './sample/sample.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';

export interface AppState {
  counterSlice: CounterFeature;
  languageSlice: LanguageFeature;
  todoSlice: TodoFeature;
}

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(
      {
        counterSlice: counterReducer,
        languageSlice: languageReducer,
        todoSlice: todoReducer,
        router: routerReducer,
      },
      {}
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([TodoEffects]),
    HttpClientModule,
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
