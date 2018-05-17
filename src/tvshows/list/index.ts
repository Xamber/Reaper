import {Component} from '@angular/core';
import {TVShowsService} from './tvshows.service'
import './styles.css';

@Component({
    selector: 'tv-shows',
    template: require('./template.html'),
    providers: [TVShowsService],
})
export class TVShowsListComponent {
    constructor(private tvShowsService: TVShowsService) {}

    loadShows(): void {
        this.tvShowsService.getShows();
    }
}