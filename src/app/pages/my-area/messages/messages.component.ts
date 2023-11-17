import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { MessagesService } from 'src/app/services/services/messages.service';
import { Message } from 'src/app/services/models/message';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {

  messagesList: Message[] = [];
  filteredList: Message[] = [];

  thisMessage: any = {};

  protected readonly clearSubscriptions$ = new Subject();

  constructor(
    private messagesService: MessagesService,
    public router: Router,
  ) {}

  ngOnInit(): void {
    this.getMessages();
  }

  ngOnDestroy(): void {
    this.clearSubscriptions$.complete();
  }

  //Obtener todos los mensajes
  getMessages(): void{
    this.messagesService.getMessages().pipe(takeUntil(this.clearSubscriptions$),).subscribe((data)=>{
      this.messagesList = data;
      this.filteredList = data;
      this.filteredList.reverse();

      console.log('Messages list: ', this.messagesList);
      console.log('filtered: ', this.filteredList);
    });
  }
  //FILTRADO POR: READ
  getUnreadMessages(){
    this.filteredList = this.messagesList.filter(message => message.read == false);
    if (this.filteredList.length <= 0 ) {
      alert('No messages founds');
      window.location.reload();
    }
  }
  getReadMessages(){
    this.filteredList = this.messagesList.filter(message => message.read == true);
    if (this.filteredList.length <= 0 ) {
      alert('No messages founds');
      window.location.reload();
    }
  }
  //FILTRADO POR: LABEL
  getFormMessages(){
    this.filteredList = this.messagesList.filter(message => message.label == 'contact form - website');
    if (this.filteredList.length <= 0 ) {
      alert('No messages founds');
      window.location.reload();
    }
  }
  getInternalMessages(){
    this.filteredList = this.messagesList.filter(message => message.label == 'internal message');
    if (this.filteredList.length <= 0 ) {
      alert('No messages founds');
      window.location.reload();
    }
  }

}
