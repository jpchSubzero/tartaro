import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  getSingleValueObservable,
  getDelayedValueObservable,
  getMultiValueObservable
} from './../util';

@Component({
  selector: 'app-fork-join-operator',
  templateUrl: './fork-join-operator.component.html'
})
export class ForkJoinOperatorComponent {
  show = false;
  values$ = forkJoin(
    getSingleValueObservable(),
    getDelayedValueObservable()
    // getMultiValueObservable(), forkJoin on works for observables that complete
  ).pipe(
    map(([first, second]) => { 
      return { first, second } as any;
    })
  );
}