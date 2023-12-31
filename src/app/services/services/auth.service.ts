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
  // endpoint: string = 'http://localhost:4000/users';
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
          this.router.navigate(['/user-area/' + res._id]);
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
  //Is not logged in
  get isLoggedOut(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? false : true;
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

  //Editar usuario
  editUser(user: User, id: string): Observable<any> {
    let api = `${this.endpoint}/update-user/${id}`;
    return this.http.put(api, user)
    .pipe(
      catchError(this.handleError)
    )
  };

  //Eliminar usuario
  deleteUser(id: string): Observable<any> {
    let api = `${this.endpoint}/delete-user/${id}`;
    return this.http.delete(api)
    .pipe(
      catchError(this.handleError)
    )
  };

  //Crear usuario
  createUser(user: User): Observable<any> {
    let api = `${this.endpoint}/register-user`;
    return this.http.post(api, user)
    .pipe(
      catchError(this.handleError)
    )
  };

  //Obtener todos los usuarios
  getUsers(): Observable<any> {
    let api = `${this.endpoint}/`;
    // let api = `${this.endpoint}/user/`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res: any) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
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
