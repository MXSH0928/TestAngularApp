import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/overlay';
import { Navigation } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  // @ViewChild('navBar', { static: true }) toolbar: Navigation;
  @ViewChild('navBar') navComponent: NavigationComponent;

  constructor(private scrollDispatcher: ScrollDispatcher) {
    this.scrollDispatcher.scrolled().subscribe((event: CdkScrollable) => {
      const scroll = event.measureScrollOffset('top');

      // console.log('navComponent: ', this.navComponent);

      if (scroll > 0) {
        // console.log('scroll', scroll);
        this.navComponent.toolbar._elementRef.nativeElement.classList.add('mat-elevation-z4');
        this.navComponent.toolbar._elementRef.nativeElement.classList.remove('mat-primary');
        this.navComponent.toolbar._elementRef.nativeElement.classList.add('mat-accent');
      } else if (scroll === 0) {
        // console.log('scroll', scroll);
        this.navComponent.toolbar._elementRef.nativeElement.classList.remove('mat-elevation-z4');
        this.navComponent.toolbar._elementRef.nativeElement.classList.remove('topDesign');
        this.navComponent.toolbar._elementRef.nativeElement.classList.add('mat-primary');
        this.navComponent.toolbar._elementRef.nativeElement.classList.remove('mat-accent');
      }

    });
  }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
  }

}
