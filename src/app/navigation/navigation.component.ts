import { Component, OnInit, ViewChild } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  title = 'Test Angular App v2.0';

  // fillerContent = Array(25).fill(0).map(() =>
  //   `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  //   labore et dolore magna aliqua.`);

  @ViewChild('toolBar', { static: true }) toolbar: MatToolbar;

  constructor() {
  }

  ngOnInit(): void {
  }
}
