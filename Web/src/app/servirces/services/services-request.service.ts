import {Injectable} from '@angular/core';
import {AuthSessionService} from "../../servirces/authenticate/auth-session.service";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {map} from 'rxjs/operators';
import {Services} from "../../models/services";

@Injectable({
  providedIn: 'root'
})
export class ServicesRequestService {

  constructor(private http: HttpClient, private authService: AuthSessionService) {
  }

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + this.authService.getToken()
  });

  getServices() {
    const url_api = 'http://localhost:3001/server/services/get'
    return this.http.get(url_api, {headers: this.headers}).pipe(map(data => data))
  }

  getSubServicesById(id: number) {
    const url_api = 'http://localhost:3001/server/services/get_sub_services';
    return this.http.post(url_api, {
      id
    }, {headers: this.headers}).pipe(map(data => data))
  }

  getSpinner() {

  }
}
