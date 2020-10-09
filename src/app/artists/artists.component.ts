import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ArtistService } from './artist.service';
import { SpotifyService } from './../services/spotify.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  artistsList:any[] = [];

  eventos:any[] = [];
  error:boolean = false;

  constructor(private _artistService:ArtistService, private _router:Router, private _spotifyService:SpotifyService) { }

  ngOnInit(): void {
    this._spotifyService.getArtists('muse').then(datos => {
      console.log('Respuesta: ', datos);
      this.artistsList = datos.artists.items.map(item => {
        item.queryParams = {artista: item.id};
        return item;
      });
      this.error = false;
    }).catch(err => {
      console.log('Error: ', err);
      this.error = true;
    });
  }

  goToAlbums(artistId) {
    console.log('Hice click en el link', artistId);
    this._router.navigate(['/albums'], {
      queryParams: { artista:artistId }
    });
  }

}
