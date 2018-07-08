import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  unPlayer: boolean;
  router: Router;

  constructor(
    private _router: Router
  ) {
    this.router = _router;
    this.unPlayer = true;
    console.log(this.router.url);
  }

}
