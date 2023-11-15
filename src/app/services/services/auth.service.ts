import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

	//Definimos el endpoint y los headers para poder realizar la petición
  endpoint: string = 'https://diegoperez-server.vercel.app/users';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  //Aquí almacenaremos el usuario
  currentUser = {};

  constructor(
    private http: HttpClient,
    public router: Router
  ) {
  }

// Sign-up
  signUp(user: User): Observable<any> {
    let api = `${this.endpoint}/register-user`;
    return this.http.post(api, user)
      .pipe(
        catchError(this.handleError)
      )
  }

// Sign-in
  signIn(user: User) {
    return this.http.post<any>(`${this.endpoint}/signin`, user)
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res.token)
        localStorage.setItem('_id', res._id)
				//Seteamos el token y id del usuario en el localStorage
        this.getUserProfile(res._id).subscribe((res) => {
          this.currentUser = res;
          this.router.navigate(['/user-area/' + res.msg._id]);
				//Redireccionamos al user-area una vez ejecutada la función
        })
      })
  }

//Get token
  getToken() {
    return localStorage.getItem('access_token');
  }

//Is logged in
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

  //Logout
  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    let removeId = localStorage.removeItem('_id');
    if (removeToken == null && removeId == null) {
      this.router.navigate(['home']);
    }
  }

  // User area
  getUserProfile(id: any): Observable<any> {
    let api = `${this.endpoint}/user-area/${id}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res: any) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

    //ir al User area
    userArea() {
      let id = localStorage.getItem('_id');
      this.router.navigate(['user-area/' + id]);
    }

  // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
