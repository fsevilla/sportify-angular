import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private _httpClient:HttpClient) { }

  getAlbumsOld():Promise<any> {
    return new Promise((resolve, reject) => {
      const albums = [
        {
          id: 1,
          title: 'Album 1',
          year: '2000',
          url: '#'
        },
        {
          id: 2,
          title: 'Album 2',
          year: '2002',
          url: '#'
        },
        {
          id: 3,
          title: 'Album 3',
          year: '2010',
          url: '#'
        },
        {
          id: 4,
          title: 'Album 4',
          year: '2018',
          url: '#'
        }
      ];
      setTimeout(function(){
        resolve(albums);
      }, 2000);
    });
  }

  getAlbums(artistId:number):Promise<any> {
    const url = environment.apiUrl + 'albums?userId='+artistId;
    return this._httpClient.get(url).toPromise();
  }

}
