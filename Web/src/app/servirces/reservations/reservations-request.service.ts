import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {AuthSessionService} from "../authenticate/auth-session.service";

@Injectable({
  providedIn: 'root'
})
export class ReservationsRequestService {

  constructor(private http: HttpClient, private authservices: AuthSessionService) {
  }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: 'Bearer ' + this.authservices.getToken()
  });

  registerReservations(user_id: number, sub_service_id: number, hairdressers: string, reservation_date: string, reservation_hour: string) {
    const url_api = "http://localhost:3001/server/reservations/register"
    return this.http.put(url_api, {
      params: {
        user_id: user_id,
        sub_service_id: sub_service_id,
        hairdressers: hairdressers,
        reservation_date: reservation_date,
        reservation_hour: reservation_hour
      }


    }, {
      headers: this.headers
    }).pipe(map(data => data))

  }

  registerNotification(user_id: number, reservation_id: number) {
    console.log("enter http", user_id, reservation_id)
    const url_api = "http://localhost:3001/server/reservations/registerNotification"
    return this.http.put(url_api, {
      params:
        {
          user_id,
          reservation_id
        }
    }, {headers: this.headers}).pipe(map(data => data))
  }

  getReservations(user_id: number) {
    const url_api = "http://localhost:3001/server/reservations/get"
    return this.http.post(url_api, {user_id}, {headers: this.headers}).pipe(map(data => data))
  }

  getNotifications(user_id: number) {
    const url_api = "http://localhost:3001/server/reservations/getNotification"
    return this.http.post(url_api, {params: {user_id}}, {headers: this.headers}).pipe(map(data => data))
  }


}
