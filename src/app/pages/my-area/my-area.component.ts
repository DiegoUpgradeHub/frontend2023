import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/services/auth.service';
import { MessagesService } from 'src/app/services/services/messages.service';

@Component({
  selector: 'app-my-area',
  templateUrl: './my-area.component.html',
  styleUrls: ['./my-area.component.scss']
})
export class MyAreaComponent {

  currentUser: any = {};
  messages: any = [];

  //MESSAGES variables
  showMessages: boolean = false;
  showUsers: boolean = true;

  constructor(
    // private sharedService: SharedService,
    public fb: FormBuilder,
    public authService: AuthService,
    public messagesService: MessagesService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) {
    let id = localStorage.getItem('_id');
    this.authService.getUserProfile(id).subscribe(res => {
      this.currentUser = res.msg;
    })
  }

  ngOnInit(): void {
  }

  showHideMessages() {
    this.showUsers = false;
    this.showMessages = !this.showMessages;
  }
  showHideUsers() {
    this.showMessages = false;
    this.showUsers = !this.showUsers;
  }

}
