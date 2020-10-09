import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpClient:HttpClient) { }

  login(code):Promise<any> {
    const url = `${environment.accountSpotifyUrl}api/token`;

    let httpParams = new HttpParams();
    httpParams = httpParams.append('grant_type', 'authorization_code');
    httpParams = httpParams.append('code', code);
    httpParams = httpParams.append('redirect_uri', environment.basePath+'confirmar');
    httpParams = httpParams.append('client_id', environment.clientId);
    httpParams = httpParams.append('client_secret', environment.clientSecret);


    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    return this._httpClient.post(url, httpParams.toString(), {
      headers: headers
    }).toPromise();
  }

}
