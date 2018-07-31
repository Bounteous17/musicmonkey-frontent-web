import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from "rxjs";
import { getSessionStorage, setSessionStorge } from './utils';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthenticationService {
    currentUser: any;

    constructor(private http: HttpClient) { }

    login(loginObject): Observable<any> {
        return this.http
          .post<any>(environment.URL + '/login', loginObject)
          .do((response: Response) => {
            // this.currentUser = <any>JSON.stringify(response);
            setSessionStorge('user', response);
            // location.reload();
          });
      }

    signup(signupObject): Observable<any> {
        console.log(signupObject);
        return this.http
            .post<any>(environment.URL + '/signup', signupObject)
    }

}