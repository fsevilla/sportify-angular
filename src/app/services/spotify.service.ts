import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private _httpClient:HttpClient) {}

  getArtists(name:string):Promise<any> {
    const token = JSON.parse(localStorage.getItem('token'));

    let headers = new HttpHeaders({
      'Authorization': `${token.token_type} ${token.access_token}`,
    });
    
    const url = environment.spotifyUrl + `search?q=${name}&type=artist&limit=10`;
    return this._httpClient.get(url, {
      headers: headers
    }).toPromise();
  }

}
