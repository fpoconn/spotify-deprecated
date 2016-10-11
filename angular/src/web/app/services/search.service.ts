import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {

    constructor(private _http: Http) {}

    search(searchStr, limit) {

        let localLimit = limit ? limit : 30;

        if(searchStr) {
            return this._http.get('https://api.spotify.com/v1/search?type=artist,track,album,playlist&q=' + searchStr.trim().replace(' ', '+') + '&limit=' + localLimit)
                .map(res => res.json());
        }
    }

}