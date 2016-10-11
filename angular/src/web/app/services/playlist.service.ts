import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {AuthService} from "./auth.service";


@Injectable()
export class PlaylistService {

    constructor(private _http: Http, private _authService: AuthService) {}

    getHeaders(){
        var access_token =  this._authService.getAccessToken();
        if(access_token) {

            var headers = new Headers();

            headers.append('Authorization', 'Bearer '+ access_token);

            return headers;
        }
    }


    playlistFromId(ownerId: string, id: string){
        
        var headers = this.getHeaders();

        if(headers) {

            if (headers && ownerId && id) {
                return this._http.get('https://api.spotify.com/v1/users/' + ownerId + '/playlists/' + id, {headers: headers})
                    .map(res => res.json());
            }
        }
    }

    getTracks(href: string){
        
        var headers = this.getHeaders();
        if(headers) {

            if (headers) {
                return this._http.get(href, {headers: headers})
                    .map(res => res.json());
            }
        }

    }
}