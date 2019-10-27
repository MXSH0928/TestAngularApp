import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UserService } from './user.service';
import { DataSource, StickyDirection } from '@angular/cdk/table';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { filter } from 'minimatch';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnChanges, OnDestroy {

  public title = 'User List Page';

  public displayedColumns: string[] = ['picture', 'first', 'last', 'email', 'edit'];
  private subscription: Subscription;
  // private user$: Observable<User[]>;
  private users: User[] = [];
  public dataSource = new MatTableDataSource();

  public showMatProgress = false;

  private showProfileImage =  false;

  private _listFilter: string;
  private filteredUsers: User[];

  constructor(private userService: UserService, private router: Router) {
    this.filteredUsers = this.users;
  }

  get listFilter(): string {
    // console.log('get listFilter has been invoked.');
    return this._listFilter;
  }

  set listFilter(value: string) {
    // console.log(`set listFilter has been invoked. Value: ${value}.`);
    this._listFilter = value;
    this.filteredUsers = this.listFilter ? this.performFilter(this.listFilter) : this.users;
    this.dataSource.data = this.filteredUsers;
  }

  // LifeCycle Hook
  ngOnInit() {
    this.showMatProgress = true;
    this.subscription = this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
      // console.log(users);
      // this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.data = this.users;
      this.showMatProgress = false;
    }, error => {
      console.log(error);
      this.showMatProgress = false;
    });
  }

  // LifeCycle Hook
  ngOnChanges() {
    console.log('ngOnChanges has been invoked.');
  }

  // LifeCycle Hook
  ngOnDestroy(): void {
    console.log('ngOnDestroy has been invoked.');
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  public redirectToUpdate = (id: string) => {
    console.log(`You have clicked ${JSON.stringify(id)}`);
    this.router.navigate(['/user'], {queryParams: { id: id }});
  }

  public toggleProfileImage(): void {
    console.log(`Show profile image: ${this.showProfileImage}`);
    this.showProfileImage = !this.showProfileImage;
  }

  private performFilter(filterBy: string): User[] {
    // console.log(`filterBy: ${filterBy}`);
    filterBy = filterBy.toLowerCase();
    return this.users.filter((user: User) =>
      user.name.first.toLowerCase().indexOf(filterBy) !== -1
      || user.name.last.toLowerCase().indexOf(filterBy) !== -1);
  }
}
