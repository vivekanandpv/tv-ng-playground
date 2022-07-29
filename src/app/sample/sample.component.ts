import { Component, OnInit } from '@angular/core';

import { getSelectors, RouterReducerState } from '@ngrx/router-store';
import { Store } from '@ngrx/store';

const { selectRouteParam, selectUrl, selectQueryParams } = getSelectors();

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
})
export class SampleComponent implements OnInit {
  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.store.select(selectRouteParam('id')).subscribe((d) => {
      console.log('id', d);
    });

    this.store.select(selectUrl).subscribe((d) => {
      console.log('url', d);
    });

    this.store.select(selectQueryParams).subscribe((d) => {
      console.log('query', d);
    });
  }
}
