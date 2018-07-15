// Browser
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
// Network
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
// Forms
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
// Components
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
// Providers
import { AuthenticationService } from './services/auth';
import 'rxjs/Rx';
// Core
import { AppComponent } from './app.component';
// Others
import { routes } from './app.router';
import { PlayComponent } from './play/play.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarLoggedComponent } from './navbar-logged/navbar-logged.component';
import { HomeComponent } from './home/home.component';
import { HomePlaylistComponent } from './home-playlist/home-playlist.component';
import { HomeSliderComponent } from './home-slider/home-slider.component';
// Dynamics
import { AdService } from './ad.service';
import { AdDirective } from './ad.directive';


@NgModule({
  declarations: [
    AppComponent,
    AdDirective,
    LoginComponent,
    SignupComponent,
    PlayComponent,
    NavbarComponent,
    NavbarLoggedComponent,
    HomeComponent,
    HomePlaylistComponent,
    HomeSliderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    routes
  ],
  providers: [
    AuthenticationService,
    AdService
  ],
  entryComponents: [HomeComponent, HomePlaylistComponent, HomeSliderComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {}
}
