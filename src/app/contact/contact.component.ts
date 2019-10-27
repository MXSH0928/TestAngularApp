import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  private title = 'Contact Page';

  constructor() { }

  ngOnInit() {
  }

  onNotify(message: string): void {
    console.log(`Event Message: ${message}`);
  }

}
