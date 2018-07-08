import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/auth';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  password: string;
  username: string;

  constructor(
    private toastr: ToastrService,
    private authenticationService: AuthenticationService,
  ) {}

  ngOnInit() {
  }

  login() {
    this.authenticationService.login({email: this.username, password: this.password})
    .subscribe(
      (data)=> {
        console.log(data);
      },
      (error)=> {
        this.showError(error.error.message);
        console.log(error.error.message);
      }
    )
  }

  showError(message) {
    this.toastr.error('Try again', message, {
      timeOut: 4000,
    });
  }

}
