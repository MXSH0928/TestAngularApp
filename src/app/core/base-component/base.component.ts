import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

// TODO: Add Angular decorator.
@Component({
  template: ''
})
export abstract class BaseComponent implements OnDestroy {
  protected ngUnsubscribe = new Subject<void>();

  ngOnDestroy(): void {
    console.log('ngOnDestroy() of BaseComponent has been invoked.');
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  /* protected subscriptions: Subscription[] = [];
  ngOnDestroy(): void {
    this.subscriptions.filter(sub => !!sub).forEach(subscription => {
      subscription.unsubscribe();
    });
  } */

}
