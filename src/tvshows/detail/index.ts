import {Component, Input} from '@angular/core';
import {Show} from '../list/shows'
import './styles.css';

@Component({
    selector: 'tv-show',
    template: require('./template.html'),
})
export class TVShowsDetailComponent {
    @Input() show: Show;
}