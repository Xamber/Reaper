import {Component, Input} from '@angular/core';
import {Show} from '../list/shows'

@Component({
    selector: 'tv-show',
    template: require('./template.html'),
    styles: [require('./styles.css')],
})
export class TVShowsDetailComponent {
    @Input() show: Show;
}