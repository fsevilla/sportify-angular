import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor() { }

  getArtists():Promise<any> {
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
      setTimeout(function(){
        resolve(artistas);
      }, 1000);
    });
  }
}
