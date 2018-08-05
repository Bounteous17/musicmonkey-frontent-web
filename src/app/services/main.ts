import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { getSessionStorage, setSessionStorge } from './utils';
import 'rxjs/add/operator/do';

@Injectable()
export class MainService {
  currentUser: any;

  constructor(private http: HttpClient) {}

  artistRelated(artistObject): Observable<any> {
    return this.http.post<any>(
      environment.URL + '/users/artist-related',
      artistObject
    );
  }

  homeRandomSongs(): Observable<any> {
    return this.http.get<any>(environment.URL + '/users/random-songs-home');
  }
}
