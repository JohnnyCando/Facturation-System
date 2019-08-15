import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {map} from "rxjs/operators";
import {isNullOrUndefined} from "util";
import {personClient} from "../../models/personClient";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthSessionService {

  constructor(private http: HttpClient, private router: Router) {
  }

  valueLogOut: boolean

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: 'Bearer ' + this.getToken()
  });

  getEmployee() {
    const url_api = "http://localhost:3001/server/users/getEmployees"
    return this.http.get(url_api, {headers: this.headers}).pipe(map(data => data))
  }
  loginUser(password: string, email: string): Observable<any> {
    const url_api = "http://localhost:3001/server/users/login"
    return this.http.post<personClient>(url_api, {
      params: {
        email,
        password
      }
    }, {headers: this.headers}).pipe(map(data => data))
  }

  registerUser(first_name: string, last_name: string, birth_date: string, email: string, password: string, gender_id: number, nick_name: string) {
    const url_api = "http://localhost:3001/server/users/register"
    return this.http.put(url_api, {
      params: {
        first_name: first_name,
        last_name: last_name,
        birth_date: birth_date,
        email: email,
        password: password,
        gender_id: gender_id,
        nick_name: nick_name
      }
    }, {
      headers: this.headers
    }).pipe(map(data => data))

  }

  updateUser(first_name: string, last_name: string, birth_date: string, email: string, password: string, gender_id: number, nick_name: string, id: number) {
    const url_api = "http://localhost:3001/server/users/update"
    return this.http.post(url_api, {
      params: {
        first_name: first_name,
        last_name: last_name,
        birth_date: birth_date,
        email: email,
        password: password,
        gender_id: gender_id,
        nick_name: nick_name,
        id: id
      }
    }, {
      headers: this.headers
    }).pipe(map(data => data))

  }

  setIdUser(id) {
    let idUsed = id
    localStorage.setItem('idUsedUser', idUsed)
  }

  getIdUser() {
    return localStorage.getItem('idUsedUser')
  }
  setLogInSubbmitted(validate) {
    let logIn = validate
    localStorage.setItem('loginValidate', logIn)
  }

  getValidate() {
    return localStorage.getItem('loginValidate')
  }
  setUser(user: personClient): void {
    let user_string = JSON.stringify(user);
    localStorage.setItem('currentUser', user_string);
  }

  setToken(token): void {
    localStorage.setItem('accessToken', token)
  }

  getToken() {
    return localStorage.getItem('accessToken')
  }

  getCurrentUser(): personClient {
    let user_string = localStorage.getItem("currentUser");
    if (!isNullOrUndefined(user_string)) {
      let user: personClient = JSON.parse(user_string);
      return user;
    } else {
      return null
    }
  }

  refresh(): void {
    window.location.reload();
  }
  logoutUser() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("currentUser");
    localStorage.removeItem('loginValidate');
    this.router.navigate(['login'])
  }
}

