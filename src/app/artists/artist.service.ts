import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private _httpClient:HttpClient) { }

  getArtistsOld():Promise<any> {
    return new Promise((resolve, reject) => {
      const artistas = [
        {
          id: 1,
          name: 'Joan Jett',
          url: '#'
        },
        {
          id: 2,
          name: 'Chayane',
          url: '#'
        },
        {
          id: 3,
          name: 'The Cramberries',
          url: '#'
        },
        {
          id: 4,
          name: 'Ricky Martin',
          url: '#'
        }
      ];
        resolve(artistas);
    });
  }

  getArtists():Promise<any> {
    const url = environment.apiUrl + 'users';
    return this._httpClient.get(url).toPromise();
  }
}
