import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/auth';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  password: string;
  username: string;
  email: string;

  constructor(
    private _toastr: ToastrService,
    private _router: Router,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit() {
  }

  signup() {
    this.authenticationService.signup({username: this.username, email: this.email, password: this.password})
    .subscribe(
      (data)=> {
        this.showSuccess(data.message);
        this._router.navigate(['/login']);
      },
      (error)=> {
        this.showError(error.error.message);
      }
    )
  }

  showError(message) {
    this._toastr.error('Try again', message);
  }

  showSuccess(message) {
    this._toastr.success('Completed', message);
  }

}
