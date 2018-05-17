import { Component } from '@angular/core';
import './styles.css';

@Component({
    selector: 'hello',
    template: require('./template.html'),
})
export class HelloComponent {
    name: string = 'User';
    counter: number = 0;

    inc(): void {
        this.counter++;
    }
}