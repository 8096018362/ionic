import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import { CONSTANTS } from './config'

@Injectable()
export class AppService {
    isLoggedIn = false;
    redirectUrl: string;
    public headers: Headers

    constructor(public http: Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

    // /** User Authentication */
    // login(username: string, password: string) {

    //     const body = {
    //         "username": username,
    //         "password": password
    //     }
    //     return this.http.post(CONSTANTS.SERVER_URL + 'login', body, { headers: this.headers }).map(response => {
    //         console.log(response)
    //         return response;
    //     });
    // }


    // getEvents(userObj) {
    //     console.log(JSON.stringify(userObj))
    //     let getDriversURL = CONSTANTS.SERVER_URL + 'getEvents'
    //     return this.http.get(getDriversURL, { headers: this.headers })
    //         .map((response: Response) => response.json().data).catch(this.handleError);
    // }


    genericPostMethod(Requrl, obj) {
        return this.http.post(Requrl, obj, { headers: this.headers }).map((res: Response) => {
            return res.json();
        })
    }
    genericGetMethod(Requrl) {
        return this.http.get(Requrl, { headers: this.headers }).map((res: Response) => {
            return res.json();
        })
    }


    private handleError(error: any) {
        if (error.status === 401) {
            localStorage.setItem('status', '401')
            // 401 unauthorized response so log user out of client
            window.location.href = '/#/error';
            return Observable.throw(error._body);
        }
    }
}

