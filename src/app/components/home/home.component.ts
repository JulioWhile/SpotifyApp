import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  mensajeError: string;
  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;

  constructor( private _spotify: SpotifyService ) { 

    this.loading = true;
    this.error = false;
              
    this._spotify.getNewReleases().subscribe( (data: any) => {
      this.nuevasCanciones = data;
      this.loading = false;
    }, errorServicio => {
      this.error = true;
      this.loading = false;
      
      this.mensajeError = errorServicio.error.error.message;
    });
        
  }



  ngOnInit() {
  }

}


