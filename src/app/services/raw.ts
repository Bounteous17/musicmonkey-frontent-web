import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from "rxjs";
import { getSessionStorage, setSessionStorge } from './utils';
import 'rxjs/add/operator/do';

@Injectable()
export class ManageRawService {

    private _headers = new HttpHeaders();//.set('Content-Type', 'application/json');

    constructor(
        private http: HttpClient
    ) { }

    upload(rawObject): Observable<any> {
        const headers = this._headers.append('enctype', 'multipart/form-data');
        
        return this.http
        .post(environment.URL + '/users/torrent-upload', rawObject, {headers: headers});
    }

}