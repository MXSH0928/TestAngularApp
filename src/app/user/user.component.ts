import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UserService } from './user.service';
import { DataSource } from '@angular/cdk/table';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  public displayedColumns: string[] = ['first', 'last', 'email', 'edit'];
  private subscription: Subscription;
  // private user$: Observable<User[]>;
  private users: User[] = [];
  public dataSource = new MatTableDataSource();

  public showMatProgress = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.showMatProgress = true;
    this.subscription = this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
      // this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.data = this.users;
      this.showMatProgress = false;
    }, error => {
      console.log(error);
      this.showMatProgress = false;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  public redirectToUpdate = (id: string) => {
    console.log(`You have clicked ${JSON.stringify(id)}`);
    this.router.navigate(['/user'], {queryParams: { id: id }});
  }

}
