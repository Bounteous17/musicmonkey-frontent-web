import { Component, OnInit } from '@angular/core';
// Dynamics
import { AdService } from '../ad.service';
import { AdItem } from '../ad-item';

@Component({
  selector: 'app-dyn-component',
  templateUrl: './dyn-component.component.html',
  styleUrls: ['./dyn-component.component.css']
})
export class DynComponentComponent implements OnInit {

  ads: AdItem[];

  constructor(
    private _adService: AdService
  ) { }

  ngOnInit() {
    this.ads = this._adService.getAds();
  }

}
