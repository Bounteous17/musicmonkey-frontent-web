import { Component, Input } from '@angular/core';
import { AdComponent } from '../ad.component';
import { PlayComponent } from '../play/play.component';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.css']
})
export class HomeSliderComponent implements AdComponent {

  @Input() data: any;

  constructor(
    private _playComponent: PlayComponent
  ) { }

  loadMainComponent(page) {
    this._playComponent.loadComponent(page);
  }

}
