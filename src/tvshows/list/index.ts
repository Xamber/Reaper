import { Component } from '@angular/core';
import { TVShowsService } from './tvshows.service'

@Component({
    selector: 'tv-shows',
    template: require('./template.html'),
    styles: [require('./styles.css')],
    providers: [TVShowsService],
})
export class TVShowsListComponent {
    constructor(private tvShowsService: TVShowsService) { }
    loadShows(): void  {
        this.tvShowsService.getShows();
    }
}