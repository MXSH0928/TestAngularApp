import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'app-contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

    // Input: Parent -> Child
    // Whoever uses this nested component can set the tile
    @Input() parentTitle: string;

    // Output: Child -> Parent
    // This event will notify the parent component
    // We could also use TypedEvent<>
    @Output() notifyEvent = new EventEmitter();

    onClick() {
        this.notifyEvent.emit('Clicked!');
    }
}
