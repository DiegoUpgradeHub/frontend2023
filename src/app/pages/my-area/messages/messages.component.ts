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

  searchBarValue!: string;

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
  //Obtener un mensaje
  getThisMessage(message: any): void {
    this.thisMessage = message;
  }
  //Barra de búsqueda
  //Obtener información del input del searchbar
  getInputValue(e:any){
    this.searchBarValue = e.target.value
  }
  //Actualización de la lista de usuarios
  updateList(event: any): void {
    this.getInputValue(event);
    this.searchMessageName();
  }
  searchMessageName(){
    if (!this.searchBarValue || this.searchBarValue.trim() === '') {
      this.filteredList = this.messagesList;
    } else {
      this.filteredList = this.messagesList.filter(message => message.name.toLowerCase().includes(this.searchBarValue.toLowerCase()));
    }
  }
  //FILTRADO POR: LABEL
  getFormMessages(){
    // this.filteredList = this.messagesList.filter(message => message.label == 'contact form - website');
    // if (this.filteredList.length <= 0 ) {
    //   alert('No messages founds');
    //   window.location.reload();
    // }
    const labelToSearch = 'contact form - website';
    this.filteredList = this.messagesList.filter(
      message => message.label.toLowerCase() === labelToSearch.toLowerCase()
    );
    if (this.filteredList.length <= 0) {
      console.error('No messages founds');
    }
  }
  getInternalMessages(){
    // this.filteredList = this.messagesList.filter(message => message.label == 'internal message');
    // if (this.filteredList.length <= 0 ) {
    //   alert('No messages founds');
    //   window.location.reload();
    // }
    const labelToSearch = 'internal message';
    this.filteredList = this.messagesList.filter(
      message => message.label.toLowerCase() === labelToSearch.toLowerCase()
    );
    if (this.filteredList.length <= 0) {
      console.error('No messages founds');
    }
  }
  // //DELETE MESSAGE
  deletingMessage(message: any): void {
    this.messagesService.deleteMessage(message).subscribe(() => {
      //TODO EL FALLO QUE TUVE LA ULTIMA VEZ FUE NO PONE EL SUBSCRIBE.
      window.location.reload();
    });
  }
  //EDIT MESSAGE
  editingMessage(message: any): void {
    message.read = !message.read
    this.messagesService.editMessage(message).subscribe(() => {
      //TODO EL FALLO QUE TUVE LA ULTIMA VEZ FUE NO PONE EL SUBSCRIBE.
      // window.location.reload();
    });
  }

}
