import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-confirm-account',
  templateUrl: './confirm-account.component.html',
  styleUrls: ['./confirm-account.component.scss']
})
export class ConfirmAccountComponent implements OnInit {

  spotifyCode:string;

  constructor(private _activatedRoute:ActivatedRoute, private _auth:AuthService, private _router:Router) {
    this._activatedRoute.queryParams.subscribe(qp => {
      this.spotifyCode = qp.code;
    })
  }

  ngOnInit(): void {
    this._auth.login(this.spotifyCode).then(response => {
      console.log('Token: ', response);
      localStorage.setItem('token', JSON.stringify(response));
      this._router.navigate(['/']);
    });
  }

}
