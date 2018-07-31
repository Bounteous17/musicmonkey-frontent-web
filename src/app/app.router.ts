import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PlayComponent } from './play/play.component';
import { DynComponentComponent } from './dyn-component/dyn-component.component';
import { NgAnalyzedModules } from '@angular/compiler';
import { TorrentUploadComponent } from './torrent-upload/torrent-upload.component';

export const router: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'play', component: DynComponentComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);