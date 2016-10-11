import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_PROVIDERS} from  '@angular/http';

import { AppComponent }  from './app.component';
import {HomeComponent} from "./home.component";
import {ArtistComponent} from "./artists/artist.component";
import {spotRouterProviders, routing} from './spot-routers';
import {RelatedAlbumsComponent} from "./artists/related-albums.component";
import {RelatedTracksComponent} from "./artists/related-tracks.component";
import {RelatedArtistsComponent} from "./artists/related-artists.component";
import {SearchResultsComponent} from "./search-results.component";
import {ArtistComponentResolve} from "./services/artist-component-resolve.service";
import {ArtistService} from "./services/artist.service";
import {AlbumComponentResolve} from "./services/album-component-resolve.service";
import {AlbumService} from "./services/album.service";
import {AlbumComponent} from "./albums/album.component";
import {LoginComponent} from "./login.component";
import {HomeBrowseComponent} from "./home-browse.component";
import {AuthGuard} from "./services/auth.guard";
import {AuthService} from "./services/auth.service";
import {UserService} from "./services/user.service";
import {HomeMyMusicComponent} from "./home-mymusic.component";
import {MyPlaylistsComponent} from "./mymusic/my-playlists.component";
import {FollowedArtistsComponent} from "./mymusic/followed-artists.component";
import {SavedAlbumsComponent} from "./mymusic/saved-albums.component";
import {SavedTracksComponent} from "./mymusic/saved-tracks.component";
import {MyTopItems} from "./mymusic/my-topitems.component";
import {BrowseService} from "./services/browse.service";
import {CategoryListComponent} from "./playlists/categories-list.component";
import {PlaylistComponentResolve} from "./services/playlist-component-resolve.service";
import {PlaylistService} from "./services/playlist.service";
import {PlaylistComponent} from "./playlists/playlist.component";
import {PlaylistBuilderComponent} from "./playlists/playlist-builder.component";

@NgModule({
    imports:      [ BrowserModule, routing ],
    declarations: [
        AppComponent,
        HomeComponent,
        ArtistComponent,
        AlbumComponent,
        PlaylistComponent,
        LoginComponent,
        HomeBrowseComponent,
        HomeMyMusicComponent,
        MyPlaylistsComponent,
        CategoryListComponent,
        FollowedArtistsComponent,
        PlaylistBuilderComponent,
        SavedAlbumsComponent,
        SavedTracksComponent,
        MyTopItems,
        RelatedAlbumsComponent,
        RelatedTracksComponent,
        RelatedArtistsComponent,
        SearchResultsComponent
    ],
    providers: [
        spotRouterProviders, 
        ArtistService, 
        AlbumService,
        AuthGuard,
        AuthService,
        UserService,
        BrowseService,
        PlaylistService,
        ArtistComponentResolve, 
        AlbumComponentResolve, 
        PlaylistComponentResolve,
        HTTP_PROVIDERS],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }