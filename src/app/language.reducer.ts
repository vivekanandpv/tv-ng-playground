import {
  createAction,
  createReducer,
  createSelector,
  on,
  props,
} from '@ngrx/store';
import produce from 'immer';
import { AppState } from './app.module';

export interface LanguageFeature {
  language: string;
}

const initialLanguageState: LanguageFeature = {
  language: 'English',
};

export const selectLanguageFn = (state: AppState) => {
  return state.languageSlice;
};

export const languageSelector = createSelector(
  selectLanguageFn,
  (cf) => cf.language
);

export interface ChangeLanguagePayload {
  newLanguage: string;
}

export const changeLanguage = createAction(
  '[Language] change language',
  props<ChangeLanguagePayload>()
);

export const languageReducer = createReducer(
  initialLanguageState,
  on(changeLanguage, (state, action) => {
    return produce(state, (d) => {
      d.language = action.newLanguage;
    });
  })
);
