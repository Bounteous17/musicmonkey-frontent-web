import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/auth';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  password: string;
  username: string;
  comStarted: boolean;

  constructor(
    private toastr: ToastrService,
    private _router: Router,
    private authenticationService: AuthenticationService,
  ) {
    this.comStarted = true;
  }

  ngOnInit() {
  }

  login() {
    this.authenticationService.login({username: this.username, password: this.password})
    .subscribe(
      (data)=> {
        sessionStorage.setItem('token', data.token);
        this._router.navigate(['/play']);
      },
      (error)=> {
        this.showError(error.error.message);
      }
    )
  }

  showError(message) {
    this.toastr.error('Try again', message);
  }

}
