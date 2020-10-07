import { Component } from '@angular/core';
import { SongService } from './song.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent {

  songsList2:any[] = [];

  nombre:string = 'Songs';

  songsList:string[] = [
    'November rain',
    'Nonono',
    'We will rock you',
    'Las mañanitas'
  ]

  constructor(private _songService:SongService) {
    console.log('Songs class constructed....', _songService);

    this.showSongs();
  }

  showSongs() {
    this._songService.getSongs().then((datos) => {
      this.songsList2 = datos;
    });
  }

}
