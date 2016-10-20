import { Injectable } from '@angular/core';

import { answer, Rating } from './shows.ts'

@Injectable()
export class TVShowsService {

    list: Rating[] = [];
    progress: boolean = false;

    getShows(): void {
        // It's server request example
        this.progress = true;
        setTimeout( () => {this.list = answer; this.progress = false;}, 1500)
    }

}
