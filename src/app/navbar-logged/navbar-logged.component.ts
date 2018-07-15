import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-logged',
  templateUrl: './navbar-logged.component.html',
  styleUrls: ['./navbar-logged.component.css']
})
export class NavbarLoggedComponent implements OnInit {

  constructor(
    private _toastr: ToastrService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    this.showSuccess();
    sessionStorage.clear();
    location.reload();
  }

  showSuccess() {
    this._toastr.warning('Success', 'Session closed');
  }

}
