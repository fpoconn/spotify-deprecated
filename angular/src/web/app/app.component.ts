import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Router, ActivatedRoute} from '@angular/router';
import {HTTP_PROVIDERS} from '@angular/http';
import {NavbarComponent} from "./navbar.component";
import {spotRouterProviders} from './spot-routers';
import {AuthService} from "./services/auth.service";

@Component({
    selector: 'spot-app',
    template: `
    <router-outlet></router-outlet>
    `,
    directives: [NavbarComponent, ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS]

})
export class AppComponent {
    
    constructor(private _router: Router, private activatedRoute: ActivatedRoute, private _authService: AuthService){}

    ngOnInit() {
        
        var href = window.location.href;
        
        var extractedcode = href.split('=');
        var ourcode = extractedcode[1];
        if (ourcode){

                if (ourcode === undefined) {
                    this._router.navigate(['login']);
                }
                else {
                    this._authService.setAccessCode(ourcode);
                    this._router.navigate(['home']);

                }
        }
    }
    
}