import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

export interface FooData {
  firstName: string;
  lastName: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService extends ComponentStore<FooData> {
  constructor() {
    super({
      firstName: 'Rajan',
      lastName: 'Krishna',
    });
  }
}
