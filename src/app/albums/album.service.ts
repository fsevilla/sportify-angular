import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor() { }

  getAlbums():Promise<any> {
    return new Promise((resolve, reject) => {
      const albums = [
        {
          title: 'Album 1',
          year: '2000',
          url: '#'
        },
        {
          title: 'Album 2',
          year: '2002',
          url: '#'
        },
        {
          title: 'Album 3',
          year: '2010',
          url: '#'
        },
        {
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
}
