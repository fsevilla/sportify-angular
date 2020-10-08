import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private _httpClient:HttpClient) { }

  getSongsOld():Promise<any> {
    return new Promise((resolve, reject) => {
      const canciones = [
        {
          title: 'November rain',
          url: '#november'
        },
        {
          title: 'Nonono',
          url: '#no'
        },
        {
          title: 'We will rock you',
          url: '#rock'
        },
        {
          title: 'Las mañanitas',
          url: '#mananitas'
        }
      ];
      setTimeout(function() {
        resolve(canciones);
      }, 3000);
    });
  }

  getSongs(albumId:number):Promise<any> {
    const url = environment.apiUrl + 'photos?albumId='+albumId;
    return this._httpClient.get(url).toPromise();
  }
}
