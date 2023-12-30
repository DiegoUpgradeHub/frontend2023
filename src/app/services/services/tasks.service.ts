import { Injectable } from '@angular/core';
import { Message } from '../models/message';
import { Task } from '../models/task';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  //Definimos el endpoint y header para hacer la API request
  endpoint: string = 'https://diegoperez-server.vercel.app/tasks';
  // endpoint: string = 'http://localhost:4000/messages';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor (
    private http: HttpClient,
    public router: Router
  ) { }

  //Obtener todas las tareas
  getTasks(): Observable<any> {
    let api = `${this.endpoint}/`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res: any) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  //Obtener tarea por cliente
  getTasksByClient(name: string): Observable<any> {
    return this.http.get(`${this.endpoint}/task/${name}`)
  }

  //Crear una tarea
  createTask(task: Task): Observable<any> {
    let api = `${this.endpoint}/create`;
    return this.http.post(api, task)
    .pipe(
      catchError(this.handleError)
    )
  };

  //Editar una tarea
  editTask(task: Task ): Observable<any> {
    let api = `${this.endpoint}/edit/${task._id}`;
    console.log("Task in Tasks Service", task);
    return this.http.put(api, task)
    .pipe(
      catchError(this.handleError)
    )
  };

  //Eliminar una tarea
  deleteTask(taskId: Task): Observable<any> {
    let api = `${this.endpoint}/delete/${taskId}`;
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
