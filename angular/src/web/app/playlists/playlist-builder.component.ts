import {Component } from '@angular/core';
import {PlaylistService} from "../services/playlist.service";

@Component({
    selector: 'spot-playlist-builder',
    template: `
    <div style="padding-top: 70px">
        <h1>Playlist Builder</h1>
    </div>
    `
})

export class PlaylistBuilderComponent  {

    playlist: any;
    
    constructor(private _playlistService: PlaylistService) {
    }


}