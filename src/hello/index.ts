import { Component } from '@angular/core';

@Component({
    selector: 'hello',
    template: require('./template.html'),
    styles: [require('./styles.css')]
})
export class HelloComponent {
    name: string = 'User';
}