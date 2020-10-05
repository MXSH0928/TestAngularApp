import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

// TODO: Add Angular decorator.
export class BaseComponent implements OnDestroy {
    ngUnsubscribe = new Subject<void>();

    ngOnDestroy(): void {
      console.log('ngOnDestroy() of BaseComponent has been invoked.');
      this.ngUnsubscribe.next();
      this.ngUnsubscribe.complete();
    }
  }
