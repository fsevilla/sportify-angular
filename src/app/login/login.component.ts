import { Component, OnInit } from '@angular/core';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const url = `${environment.accountSpotifyUrl}authorize?client_id=${environment.clientId}&response_type=code&redirect_uri=${environment.basePath}confirmar`;

    console.log('URl : ', url)

    window.location.href = url;
  }

}
