import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/services/auth.service';
import { MessagesService } from 'src/app/services/services/messages.service';

// import { SharedService } from 'src/app/core/shared.service';

@Component({
  selector: 'app-my-area',
  templateUrl: './my-area.component.html',
  styleUrls: ['./my-area.component.scss']
})
export class MyAreaComponent {

  currentUser: any = {};
  messages: any = [];
  deleteMessageForm!: FormGroup;

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
    this.messagesService.getMessages().subscribe(res => {
      this.messages = res;
      this.messages.reverse(); //Ordenamos colocando los más nuevos primero
    })
    this.deleteMessageForm = this.fb.group({
      _id: [''],
    })
  }

  ngOnInit(): void {
    let _id = this.actRoute.snapshot.paramMap.get('_id') as string;
    this.deleteMessageForm.get('_id')?.setValue(_id);
  }

  deletingMessage() {
    this.messagesService.deleteMessage(this.messages.value).subscribe(() => {
      this.authService.userArea();
    })
  }

}
