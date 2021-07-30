import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import {
  getSingleValueObservable,
  getDelayedValueObservable,
  getMultiValueObservable
} from './../util';

@Component({
  selector: 'app-manual-subscriptions',
  templateUrl: './manual-subscriptions.component.html'
})
export class ManualSubscriptionsComponent {
  first: string;
  second: string;
  third: number;
  thirdSubscription: Subscription;

  ngOnInit() {
    getSingleValueObservable()
      .subscribe(value => this.first = value);

    getDelayedValueObservable()
      .subscribe(value => this.second = value);

    this.thirdSubscription = getMultiValueObservable()
      .subscribe(value => this.third = value);
  }

  // Multi value observables must manually
  // unsubscribe to prevent memory leaks.
  ngOnDestroy() {
    this.thirdSubscription.unsubscribe();
  }
}