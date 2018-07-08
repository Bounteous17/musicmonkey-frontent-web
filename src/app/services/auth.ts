import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from "rxjs";
import 'rxjs/add/operator/do';

@Injectable()
export class AuthenticationService {
    currentUser: any;

    constructor(private http: HttpClient) { }

    login(loginObject): Observable<any> {
        return this.http
          .post<any>('http://localhost:6969/login', loginObject)
          .do((response: Response) => {
            this.currentUser = <any>JSON.stringify(response);

          });
      }
 
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}