import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor() { }

  getSongs():Promise<any> {
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
}
