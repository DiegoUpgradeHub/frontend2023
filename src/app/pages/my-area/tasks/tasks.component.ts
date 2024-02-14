import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { formatDate, DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/services/services/auth.service';
import { User } from 'src/app/services/models/user';
import { TasksService } from 'src/app/services/services/tasks.service';
import { Task } from 'src/app/services/models/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  providers: [DatePipe]
})
export class TasksComponent {

  tasksList: Task[] = [];
  filteredList: Task[] = [];

  //Variable utilizada para identificar el cliente en el dropdown menu cuando seleccionamos para quién es la tarea
  clients: User[] = [];
  //Variable para identificar cada tarea
  thisTask: any = {};

  searchBarValue!: string;

  editTaskForm!: FormGroup;
  createTaskForm!: FormGroup;

  //Variables para filtros de búsqueda
  selectedYear: string | null = null;
  selectedMonth: string | null = null;
  selectedClient: string = '';

  //Variable contador de tiempo
  totalTimeCounter: string = '';

  protected readonly clearSubscriptions$ = new Subject();

  constructor(
    private authService: AuthService,
    private tasksService: TasksService,
    private datePipe: DatePipe,
    public router: Router,
    public fb: FormBuilder,
  ) {
    this.editTaskForm = this.fb.group({
      client: [''],
      dateStart: [''],
      dateEnd: [''],
      description: [''],
      _id: ['']
    })
    this.createTaskForm = this.fb.group({
      client: [''],
      dateStart: [''],
      dateEnd: [''],
      description: [''],
    })
  }

  ngOnInit(): void {
    this.getAllTasks();
    this.getAllUsers();
    // this.sortByDateStartDescending(); Lo he comentado porque no funcionó bien, lo he añadido en getalltasks

    //Edit task form
    this.editTaskForm.get('client')?.setValue(this.thisTask.client);
    this.editTaskForm.get('dateStart')?.setValue(this.thisTask.dateStart);
    this.editTaskForm.get('dateEnd')?.setValue(this.thisTask.dateEnd);
    this.editTaskForm.get('description')?.setValue(this.thisTask.description);
     //Create task form
    this.createTaskForm.get('client')?.setValue(this.thisTask.client);
    this.createTaskForm.get('dateStart')?.setValue(this.thisTask.dateStart);
    this.createTaskForm.get('dateEnd')?.setValue(this.thisTask.dateEnd);
    this.createTaskForm.get('description')?.setValue(this.thisTask.description);
  }

  ngOnDestroy(): void {
    this.clearSubscriptions$.complete();
  }
  //Obtener todas las tareas
  getAllTasks() {
    return this.tasksService.getTasks().pipe(takeUntil(this.clearSubscriptions$)).subscribe((data) => {
      this.tasksList = data;
      this.applyFilters();
      this.updateTotalTimeCounter();
    });
  }
  //Obtener todos los usuarios
  getAllUsers() {
    return this.authService.getUsers().pipe(takeUntil(this.clearSubscriptions$),).subscribe((data) => {
      this.clients = data;
      console.log(this.filteredList);
    })
  }
  //Obtener esta tarea
  getThisTask(task: any): void {
    this.thisTask = task;
    //Añadimos un Patchvalue para actualizar los campos con la información del formulario de edición
    this.editTaskForm.patchValue({
      client: this.thisTask.client,
      dateStart: this.thisTask.dateStart,
      dateEnd: this.thisTask.dateEnd,
      description: this.thisTask.description,
      _id: this.thisTask._id
    });
  }
  //FILTERS FUNCTIONS
  //Buscar una tarea
  searchTaskByClient(){
    this.filteredList = this.tasksList.filter(task => task.client.name.toLowerCase() == this.searchBarValue.toLowerCase())
  }
  //Obtener información del input del searchbar
  getInputValue(e:any){
    this.searchBarValue = e.target.value
  }
  //Aplicar filtros
  applyFilters() {
    this.filteredList = this.tasksList.filter(task => {
      const yearMatch = !this.selectedYear || this.selectedYear === 'null' || new Date(task.dateStart).getFullYear() === +this.selectedYear;
      const monthMatch = !this.selectedMonth || this.selectedMonth === 'null' || new Date(task.dateStart).getMonth() === this.getMonthNumberByName(this.selectedMonth);
      const clientMatch = !this.selectedClient || task.client.name.toLowerCase().includes(this.selectedClient.toLowerCase());

      return yearMatch && monthMatch && clientMatch;
    });
    this.sortByDateStartDescending();
    this.updateTotalTimeCounter();
  }

  getMonthNumberByName(monthName: string): number {
    const months = [
      'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
    ];
    return months.findIndex(month => month.toLowerCase() === monthName.toLowerCase());
  }

  //CRUD FUNCTIONS
  //Eliminar Task
  deletingTask(task: any): void {
    //Variable para almacenar la ID de la tarea porque en el servicio se envía la ID directamente
    const taskId = task._id;
    this.tasksService.deleteTask(taskId).subscribe(() => {
      //TODO EL FALLO QUE TUVE LA ULTIMA VEZ FUE NO PONE EL SUBSCRIBE.
      this.getAllTasks(); // Vuelve a obtener todas las tareas actualizando la lista sin recargar la página. Evitamos utilizar window.location.reload()
    },
    (error) => {
      console.error('Error al eliminar la tarea:', error);
    });
  }
  //Editar Task
  editingTask(task: any): void {
    this.tasksService.editTask(this.editTaskForm.value).subscribe((updatedTask) => {
      //TODO EL FALLO QUE TUVE LA ULTIMA VEZ FUE NO PONE EL SUBSCRIBE.
      this.getAllTasks(); // Vuelve a obtener todas las tareas actualizando la lista sin recargar la página. Evitamos utilizar window.location.reload()
    }, (error) => {
      console.error('Error al editar la tarea:', error);
    });
  }
  //Crear Task
  creatingTask() {
    this.tasksService.createTask(this.createTaskForm.value).subscribe(() => {
      //TODO EL FALLO QUE TUVE LA ULTIMA VEZ FUE NO PONE EL SUBSCRIBE.
      this.getAllTasks(); // Vuelve a obtener todas las tareas actualizando la lista sin recargar la página. Evitamos utilizar window.location.reload()
    }, (error) => {
      console.error('Error al crear la tarea:', error);
    });
  }

  //TIME MANAGER FUNCTIONS
  //Start task
  setStartDate(): void {
    const currentDateTime = new Date(); // Obtiene la fecha y hora actual
    // Formatea la fecha y hora actual a un formato específico si es necesario
    const formattedDateTime = `${currentDateTime.getFullYear()}-${
      (currentDateTime.getMonth() + 1).toString().padStart(2, '0')
    }-${currentDateTime.getDate().toString().padStart(2, '0')} ${
      currentDateTime.getHours().toString().padStart(2, '0')
    }:${currentDateTime.getMinutes().toString().padStart(2, '0')}:${
      currentDateTime.getSeconds().toString().padStart(2, '0')
    }`;

    // Ahora, puedes asignar la fecha y hora actual al campo dateStart en createTaskForm
    this.createTaskForm.patchValue({
      dateStart: formattedDateTime // Asigna la fecha y hora actual al campo dateStart
    });
  }
  editStartDate(): void {
    const currentDateTime = new Date(); // Obtiene la fecha y hora actual
    // Formatea la fecha y hora actual a un formato específico si es necesario
    const formattedDateTime = `${currentDateTime.getFullYear()}-${
      (currentDateTime.getMonth() + 1).toString().padStart(2, '0')
    }-${currentDateTime.getDate().toString().padStart(2, '0')} ${
      currentDateTime.getHours().toString().padStart(2, '0')
    }:${currentDateTime.getMinutes().toString().padStart(2, '0')}:${
      currentDateTime.getSeconds().toString().padStart(2, '0')
    }`;

    // Ahora, puedes asignar la fecha y hora actual al campo dateStart en createTaskForm
    this.editTaskForm.patchValue({
      dateStart: formattedDateTime // Asigna la fecha y hora actual al campo dateStart
    });
  }
  //End task
  setEndDate(): void {
    const currentDateTime = new Date(); // Obtiene la fecha y hora actual
    // Formatea la fecha y hora actual a un formato específico si es necesario
    const formattedDateTime = `${currentDateTime.getFullYear()}-${
      (currentDateTime.getMonth() + 1).toString().padStart(2, '0')
    }-${currentDateTime.getDate().toString().padStart(2, '0')} ${
      currentDateTime.getHours().toString().padStart(2, '0')
    }:${currentDateTime.getMinutes().toString().padStart(2, '0')}:${
      currentDateTime.getSeconds().toString().padStart(2, '0')
    }`;

    // Ahora, puedes asignar la fecha y hora actual al campo dateStart en createTaskForm
    this.createTaskForm.patchValue({
      dateEnd: formattedDateTime // Asigna la fecha y hora actual al campo dateStart
    });
  }
  editEndDate(): void {
    const currentDateTime = new Date(); // Obtiene la fecha y hora actual
    // Formatea la fecha y hora actual a un formato específico si es necesario
    const formattedDateTime = `${currentDateTime.getFullYear()}-${
      (currentDateTime.getMonth() + 1).toString().padStart(2, '0')
    }-${currentDateTime.getDate().toString().padStart(2, '0')} ${
      currentDateTime.getHours().toString().padStart(2, '0')
    }:${currentDateTime.getMinutes().toString().padStart(2, '0')}:${
      currentDateTime.getSeconds().toString().padStart(2, '0')
    }`;

    // Ahora, puedes asignar la fecha y hora actual al campo dateStart en createTaskForm
    this.editTaskForm.patchValue({
      dateEnd: formattedDateTime // Asigna la fecha y hora actual al campo dateStart
    });
  }
  //Time gap calculation
  getElapsedTime(task: any): string {
    const startDate = new Date(task.dateStart);
    const endDate = new Date(task.dateEnd);
    console.log('Esta tarea:', this.thisTask)
    // Verificar si las fechas son válidas
    if (!isNaN(startDate.getTime()) && !isNaN(endDate.getTime())) {
      const elapsedMilliseconds = endDate.getTime() - startDate.getTime();
      // Convertir milisegundos a horas y minutos
      const hours = Math.floor(elapsedMilliseconds / 3600000);
      const minutes = Math.floor((elapsedMilliseconds % 3600000) / 60000);

      return `${hours} hours ${minutes} minutes`;
    } else {
      return 'Invalid date format';
    }
  }
  //Fecha formateada utilizada para mostrar cuándo se inició la tarea
  formattedStartDate(task: any): string {
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const months = [
      'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
    ];

    const startDate = new Date(task.dateStart);
    const year = startDate.getFullYear();
    const dayOfWeek = days[startDate.getDay()];
    const dayOfMonth = startDate.getDate();
    const month = months[startDate.getMonth()];

    return `${dayOfWeek} ${dayOfMonth} de ${month} del ${year}.`;
  }

  //Función para organizar los mensajes por fecha
  sortByDateStartDescending() {
    this.filteredList.sort((a, b) => {
      const dateA = new Date(a.dateStart);
      const dateB = new Date(b.dateStart);
      return dateB.getTime() - dateA.getTime();
    });
  }

  //TIME COUNTER FUNCTIONS
  updateTotalTimeCounter(): void {
    // Calcular el tiempo total aquí (puedes usar la lógica de getElapsedTime())
    // Por ejemplo, sumar la duración de todas las tareas en filteredList
    const totalMilliseconds = this.filteredList.reduce((total, task) => {
      const startDate = new Date(task.dateStart);
      const endDate = new Date(task.dateEnd);

      if (!isNaN(startDate.getTime()) && !isNaN(endDate.getTime())) {
        return total + (endDate.getTime() - startDate.getTime());
      } else {
        return total;
      }
    }, 0);

    // Convertir milisegundos a horas y minutos
    const totalHours = Math.floor(totalMilliseconds / 3600000);
    const totalMinutes = Math.floor((totalMilliseconds % 3600000) / 60000);

    // Actualizar la variable totalTimeCounter
    this.totalTimeCounter = `${totalHours} hours ${totalMinutes} minutes`;
  }

}
