import { Component } from '@angular/core';

@Component({
    selector: 'hello',
    template: require('./template.html'),
    styles: [require('./styles.css')]
})


export class HelloComponent {
    name: string = 'User';
    counter: number = 0;

    inc(): void {
      this.counter ++;
    }
}