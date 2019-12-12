import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap, takeUntil } from 'rxjs/operators';
import { UserService } from '../services/user-service/user.service';
import { BaseComponent } from '../core/base-component/base.component';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent extends BaseComponent implements OnInit {
  ngUnsubscribe: import('rxjs').Subject<void>;

  private id: string;
  public user: User;
  private subscription: Subscription;
  public showMatProgress = false;
  public cardWidth = '80%';

  // The ActivatedRoute service provides a params Observable which we can subscribe to to get the route parameters
  constructor(private userService: UserService, private route: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    this.showMatProgress = true;

    // this.subscription =
    this.route.params.pipe(takeUntil(this.ngUnsubscribe)).subscribe(
      params => {
        this.id = params['id']; // (+) converts string 'id' to a number
        console.log(`User Id: ${this.id}`);

        this.userService
          .getUser(this.id)
          .pipe(takeUntil(this.ngUnsubscribe))
          .subscribe(u => {
            this.user = u;
            console.log(this.user);
            this.showMatProgress = false;
          });
      },
      error => {
        console.log(error);
        this.showMatProgress = false;
      }
    );
  }

  /*getUser(): void {
    this.user = this.route.paramMap.pipe(switchMap(params => {
      const id = +params.get('id');
      return this.userService.getUser(id);
    }));
  }*/

  // LifeCycle Hook
  /*ngOnDestroy(): void {
     // ToDo: Create a nameOf shared function
    console.log(`ngOnDestroy has been invoked in UserDetailsComponent.`);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }*/
}
