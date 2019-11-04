import { Component, Input, Output, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormArray,
  FormGroup,
  FormGroupDirective,
  NgForm
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  // Input: Parent -> Child
  // Whoever uses this nested component can set the tile
  @Input() parentTitle: string;

  @Input() contactCardWidth = '500px';

  // Output: Child -> Parent
  // This event will notify the parent component
  // We could also use TypedEvent<>
  @Output() notifyEvent = new EventEmitter();

  constructor(private fb: FormBuilder, private dialog: MatDialog) {}

  contactForm: FormGroup;

  ngOnInit() {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      lastName: [''],
      emailAddress: ['', [Validators.required, Validators.email]],
      phoneNumber: [''],
      message: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter to keep the form encapsulated and to provide the form value outside the component.
    console.log(
      `Contact form values: ${JSON.stringify(this.contactForm.value)}`
    );

    this.notifyEvent.emit('Contact form has been submitted.');

    const dialogRef = this.dialog.open(DialogComponent, {
      height: '200px',
      width: '400px',
      /* disableClose: true, */
      data: {
        title: 'My title',
        content: 'Add important message here.'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`The dialog was closed. ${result}`);
    });
  }

  onClick() {
    this.notifyEvent.emit('Clicked!');
  }

  onCancel = () => {
    // this.location.back();
    this.contactForm.reset();
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.contactForm.controls[controlName].hasError(errorName);
  }
}
