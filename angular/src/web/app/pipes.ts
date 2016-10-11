import {Pipe} from '@angular/core'
import {DomSanitizationService} from '@angular/platform-browser';

@Pipe({name: 'sanitizeTrackUrl'})
export class SanitizeTrackUrl {

    constructor(private sanitizer:DomSanitizationService){
        this.sanitizer = sanitizer;
    }

    transform(id){
        
        let url = 'https://embed.spotify.com/?uri=spotify:track:' + id + '&theme=white';
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}

@Pipe({name: 'formatGenres'})
export class FormatGenres {

    transform(value){
        if(value) {
            var str = value.toString();
            return str.replace(/,/g, " | ");
        }
    }
}