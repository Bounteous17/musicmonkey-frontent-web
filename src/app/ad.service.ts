import { Injectable } from '@angular/core';
// Components
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { HomePlaylistComponent } from './home-playlist/home-playlist.component';
// Dynamics
import { AdItem } from './ad-item';

@Injectable()
export class AdService {
  getAds() {
    return [
        new AdItem(LoginComponent, { name: 'Login' }),
        new AdItem(SignupComponent, { name: 'Signup' }),
        new AdItem(HomeComponent, { name: 'Home' }),
        new AdItem(HomeSliderComponent, { name: 'Home slider' }),
        new AdItem(HomePlaylistComponent, { name: 'Home playlists'})
    ];
  }
}