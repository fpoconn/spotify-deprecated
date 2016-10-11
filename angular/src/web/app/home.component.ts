import {Component } from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';

@Component({
    selector: 'spot-home',
    template: `
    <spot-navbar (searchResultEvent)="setResults($event)"></spot-navbar>
    <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})

export class HomeComponent {

    constructor(private _router: Router){}

    setResults(resEvent) {

        if(resEvent.s) {

            this._router.navigate(['../home/searchResults', resEvent.s ]);
        }
    }
}