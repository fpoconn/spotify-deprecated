import {spotRouterProviders} from './spot-routers';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app.module';
import {AuthService} from "./services/auth.service";

platformBrowserDynamic().bootstrapModule(AppModule, [spotRouterProviders, AuthService]);