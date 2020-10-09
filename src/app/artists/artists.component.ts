import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ArtistService } from './artist.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  artistsList:any[] = [];

  eventos:any[] = [];
  error:boolean = false;

  constructor(private _artistService:ArtistService, private _router:Router) { }

  ngOnInit(): void {
    this._artistService.getArtists().then(datos => {
      this.artistsList = datos.map(item => {
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
