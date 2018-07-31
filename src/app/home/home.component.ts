import { Component, Input } from '@angular/core';
import { AdComponent } from '../ad.component';
// Webtorrent Lib
declare var createPlayer: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AdComponent {

  @Input() data: any;

  constructor(
  ) {
  }

  playSong(userTorrent) {
    createPlayer(userTorrent);
  }

}
