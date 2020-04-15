import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artistas: any[] = [];
  loading: boolean;

  constructor(private _spotify: SpotifyService) { }

  ngOnInit() {
  }

  buscar(termino: string) {
    this.loading = true;

    if (termino.length > 0) {
      this._spotify.getArtists(termino).subscribe((data: any) => {
        this.artistas = data;
        this.loading = false;
      });
    }
  }

}
