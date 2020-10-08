import { Component, OnInit } from '@angular/core';
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

  constructor(private _artistService:ArtistService) { }

  ngOnInit(): void {
    this._artistService.getArtists().then(datos => {
      this.artistsList = datos;
      this.error = false;
    }).catch(err => {
      console.log('Error: ', err);
      this.error = true;
    });
  }

}
