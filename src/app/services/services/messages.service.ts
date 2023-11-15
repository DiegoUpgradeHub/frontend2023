import { Injectable } from '@angular/core';
import { Message } from '../models/message';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  //Definimos el endpoint y header para hacer la API request
  endpoint: string = 'https://diegoperez-server.vercel.app/messages';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor (
    private http: HttpClient,
    public router: Router
  ) { }

  //Obtener todos los mensajes
  getMessages(): Observable<any> {
    let api = `${this.endpoint}/`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res: any) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  //Obtener mensaje por label
  getMessageByLabel(label: string): Observable<any> {
    return this.http.get(`${this.endpoint}/message/${label}`)
  }

  //Crear un mensaje
  createMessage(message: Message): Observable<any> {
    let api = `${this.endpoint}/create`;
    return this.http.post(api, message)
    .pipe(
      catchError(this.handleError)
    )
  };

  //Editar un mensaje
  editMessage(message: Message ): Observable<any> {
    let id = message._id
    let api = `${this.endpoint}/edit/${id}`;
    return this.http.put(api, message)
    .pipe(
      catchError(this.handleError)
    )
  };

  //Eliminar un mensaje
  deleteMessage(message: Message): Observable<any> {
    let id = message._id
    let api = `${this.endpoint}/delete/${id}`;
    return this.http.delete(api)
    .pipe(
      catchError(this.handleError)
    )
  };

  // Gestión de errores
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
