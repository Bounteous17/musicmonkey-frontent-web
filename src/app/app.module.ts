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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
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
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
