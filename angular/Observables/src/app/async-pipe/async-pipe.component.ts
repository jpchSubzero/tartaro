import { Component } from '@angular/core';

import {
  getSingleValueObservable,
  getDelayedValueObservable,
  getMultiValueObservable
} from './../util';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html'
})
export class AsyncPipeComponent {
  show = false;
  first$ = getSingleValueObservable();
  second$ = getDelayedValueObservable();
  third$ = getMultiValueObservable();
}