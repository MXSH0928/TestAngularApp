import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  private id: string;
  private user: User;
  private subscription: Subscription;

  // The ActivatedRoute service provides a params Observable which we can subscribe to to get the route parameters
  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {    
    this.subscription = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      console.log(`User Id: ${this.id}`);

      this.userService.getUser(this.id).subscribe(u => {
        this.user = u
        console.log(`${JSON.stringify(this.user)}`);
      } );      
   });

  }

  getUser(): void {
    this.user = this.route.paramMap.pipe(switchMap(params => {
      const id = +params.get('id');
      return this.userService.getUser(id);
    }));
  }

   // LifeCycle Hook
   ngOnDestroy(): void {
     // ToDo: Create a nameOf shared function
    console.log(`ngOnDestroy has been invoked in UserDetailsComponent.`);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
