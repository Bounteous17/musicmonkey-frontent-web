import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// Dynamics
import { AdService } from './ad.service';
import { AdItem } from './ad-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  router: Router;

  ads: AdItem[];

  constructor(
    private _router: Router,
    private adService: AdService
  ) {
    this.router = _router;
  }

  ngOnInit() {
    this.ads = this.adService.getAds();
  }

}
