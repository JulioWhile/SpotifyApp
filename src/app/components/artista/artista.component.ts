import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {
  loading: boolean;

  artista: any = {};
  topTracks: any[] = [];

  constructor(private activatedRoute: ActivatedRoute,
    private _Spotify: SpotifyService) {
      this.loading = true;

      this.activatedRoute.params.subscribe( params => {
        this.getArtista(params['id']);
        this.getTopTracks(params['id']);
      });
  }

  getArtista( id: string ) {
    this.loading = true;

    this._Spotify.getArtist(id).subscribe( artista => {
      console.log(artista);
      this.artista = artista;
      this.loading = false;
    });
  }

  getTopTracks( id: string ) {
    this._Spotify.getTopTracks(id).subscribe( topTracks => {
      this.topTracks = topTracks;
      console.log(this.topTracks);
    });
  }


}
