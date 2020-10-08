import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AlbumService } from './album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  albumsList:any[] = [];
  artistId:number;

  constructor(private _albumService:AlbumService, private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this._activatedRoute.queryParams.subscribe(qp => {
      this.artistId = +qp.artista;
    });

    this._albumService.getAlbums(this.artistId).then(datos => {
      this.albumsList = datos;
    });
  }

}
