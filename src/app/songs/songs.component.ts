import { Component } from '@angular/core';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent {
  nombre:string = 'Songs';

  songsList:string[] = [
    'November rain',
    'Nonono',
    'We will rock you',
    'Las mañanitas'
  ]
}
