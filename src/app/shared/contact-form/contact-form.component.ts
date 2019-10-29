import { Component, Input, Output, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup, FormGroupDirective, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
    selector: 'app-contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

    // Input: Parent -> Child
    // Whoever uses this nested component can set the tile
    @Input() parentTitle: string;

    // Output: Child -> Parent
    // This event will notify the parent component
    // We could also use TypedEvent<>
    @Output() notifyEvent = new EventEmitter();

    constructor(private fb: FormBuilder) { }

    contactForm: FormGroup;

    ngOnInit() {
        this.contactForm = this.fb.group({
            firstName: ['', [Validators.required, Validators.minLength(2)]],
            lastName: [''],
            emailAddress: ['', [Validators.required, Validators.email]],
            phoneNumber: [''],
            message: ['', [Validators.required, Validators.minLength(5)]]
        });
    }

    onSubmit() {
        // TODO: Use EventEmitter to keep the form encapsulated and to provide the form value outside the component.
        console.log(this.contactForm.value);
    }

    onClick() {
        this.notifyEvent.emit('Clicked!');
    }
}
