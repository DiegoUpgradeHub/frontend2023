import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/services/services/auth.service';
import { User } from 'src/app/services/models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  usersList: User[] = [];
  filteredList: User[] = [];

  thisUser: any = {};

  searchBarValue!: string;

  editUserForm!: FormGroup;

  createUserForm!: FormGroup;
  currentDate = new Date().toUTCString();

  protected readonly clearSubscriptions$ = new Subject();

  constructor(
    private authService: AuthService,
    public router: Router,
    public fb: FormBuilder,
  ) {
    this.editUserForm = this.fb.group({
      _id:[''],
      name: [''],
      lastName: [''],
      email: [''],
      password: [''],
      phone: [''],
      company: [''],
      brand: [''],
      role: ['']
    })
    this.createUserForm = this.fb.group({
      name: [''],
      lastName: [''],
      email: [''],
      password: [''],
      phone: [''],
      company: [''],
      brand: [''],
      role: [''],
      startDate: [this.currentDate]
    })
  }

  ngOnInit(): void {
    this.getAllUsers();

    //Edit user form
    this.editUserForm.get('_id')?.setValue(this.thisUser._id);
    this.editUserForm.get('name')?.setValue(this.thisUser.name);
    this.editUserForm.get('lastName')?.setValue(this.thisUser.lastName);
    this.editUserForm.get('email')?.setValue(this.thisUser.email);
    this.editUserForm.get('password')?.setValue(this.thisUser.password);
    this.editUserForm.get('phone')?.setValue(this.thisUser.phone);
    this.editUserForm.get('company')?.setValue(this.thisUser.company);
    this.editUserForm.get('brand')?.setValue(this.thisUser.brand);
    this.editUserForm.get('role')?.setValue(this.thisUser.role);
     //Create user form
    this.createUserForm.get('name')?.setValue(this.thisUser.name);
    this.createUserForm.get('lastName')?.setValue(this.thisUser.lastName);
    this.createUserForm.get('email')?.setValue(this.thisUser.email);
    this.createUserForm.get('password')?.setValue(this.thisUser.password);
    this.createUserForm.get('phone')?.setValue(this.thisUser.phone);
    this.createUserForm.get('company')?.setValue(this.thisUser.company);
    this.createUserForm.get('brand')?.setValue(this.thisUser.brand);
    this.createUserForm.get('role')?.setValue(this.thisUser.role);
    this.createUserForm.get('startDate')?.setValue(this.currentDate);
  }

  ngOnDestroy(): void {
    this.clearSubscriptions$.complete();
  }
  //Obtener todos los usuarios
  getAllUsers() {
    return this.authService.getUsers().pipe(takeUntil(this.clearSubscriptions$),).subscribe((data) => {
      this.usersList = data
      this.filteredList = data
    })
  }
  //Obtener este usuario
  getThisUser(user: any): void {
    console.log(user);
    this.thisUser = user;
  }
  // //Buscar un usuario
  searchUserName(){
    if (!this.searchBarValue || this.searchBarValue.trim() === '') {
      this.filteredList = this.usersList;
    } else {
      this.filteredList = this.usersList.filter(user => user.name.toLowerCase().includes(this.searchBarValue.toLowerCase()));
    }
  }
  //Obtener información del input del searchbar
  getInputValue(e:any){
    this.searchBarValue = e.target.value
  }
  //Actualización de la lista de usuarios
  updateList(event: any): void {
    this.getInputValue(event); // Asegúrate de tener lógica para actualizar el valor de searchBarValue
    this.searchUserName();
  }

  //Obetener usuarios Marketing
  getClient(){
    this.filteredList = this.usersList.filter(user => user.role == 'client');
  }
  //Obetener usuarios Administración
  getAdmin(){
    this.filteredList = this.usersList.filter(user => user.role == 'admin');
  }
  // //DELETE USER
  deletingUser(user: any): void {
    this.authService.deleteUser(user._id).subscribe(() => {
      //TODO EL FALLO QUE TUVE LA ULTIMA VEZ FUE NO PONE EL SUBSCRIBE.
      window.location.reload();
    });
  }
  //EDIT MESSAGE
  editingUser(user: any): void {
    user.role = 'admin';
    let id = user._id;
    this.authService.editUser(this.editUserForm.value, id).subscribe(() => {
      //TODO EL FALLO QUE TUVE LA ULTIMA VEZ FUE NO PONE EL SUBSCRIBE.
      window.location.reload();
    });
  }
  //CREATE USER
  creatingUser() {
    this.authService.createUser(this.createUserForm.value).subscribe(() => {
      //TODO EL FALLO QUE TUVE LA ULTIMA VEZ FUE NO PONE EL SUBSCRIBE.
      window.location.reload();
    })
  }

}
