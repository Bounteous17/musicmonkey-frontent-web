import { Component, Input, OnInit } from '@angular/core';
// Dynamics
import { AdComponent } from '../ad.component';
import { SharedComponent } from '../shared/shared.component';
// Providers
import { MainService } from '../services/main';
// Webtorrent Lib
declare var createPlayer: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AdComponent, OnInit {
  @Input()
  data: any;

  ngOnInit() {
    this.homeRandomSongs();
  }

  constructor(
    private _mainService: MainService,
    private _sharedComponent: SharedComponent
  ) {}

  playSong(userTorrent) {
    createPlayer(userTorrent);
  }

  homeRandomSongs() {
    this._mainService.homeRandomSongs().subscribe(
      data => {
        console.log(data);
      },
      error => {
        this._sharedComponent.showError(error.error.message);
      }
    );
  }
}
