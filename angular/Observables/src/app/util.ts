import { Observable, interval, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export function getSingleValueObservable() {
  return of('single value');
}

export function getDelayedValueObservable() {
  return of('delayed value').pipe(delay(2000));
}

export function getMultiValueObservable() {
  return new Observable<number>(observer => {
    let count = 0;
    const interval = setInterval(() => {
      observer.next(count++);
      console.log('interval fired');
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  });
}