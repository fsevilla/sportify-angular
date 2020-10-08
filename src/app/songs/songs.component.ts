import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SongService } from './song.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent {

  songsList2:any[] = [];
  albumId:number;
  artistId:number;

  nombre:string = 'Songs';

  songsList:string[] = [
    'November rain',
    'Nonono',
    'We will rock you',
    'Las mañanitas'
  ]

  constructor(private _songService:SongService, private _activatedRoute:ActivatedRoute) {
    
    this._activatedRoute.queryParams.subscribe(qp => {
      this.albumId = +qp.album;
      this.artistId = +qp.artista;
    });

    this.showSongs();
  }

  showSongs() {
    this._songService.getSongs(this.albumId).then((datos) => {
      this.songsList2 = datos;
    });
  }

}
