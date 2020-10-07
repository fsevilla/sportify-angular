import { Component, OnInit } from '@angular/core';
import { AlbumService } from './album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  albumsList:any[] = [];

  constructor(private _albumService:AlbumService) { }

  ngOnInit(): void {
    this._albumService.getAlbums().then(datos => {
      this.albumsList = datos;
    })
  }

}
