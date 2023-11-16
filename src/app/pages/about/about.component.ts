import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  contactPopup: boolean = false;
  contact: string = '';

  contactInstagram(){
    this.contact = '@hallo.diego';
    this.contactPopup = !this.contactPopup;
  };
  contactWhatsapp(){
    this.contact = '+4917662676949';
    this.contactPopup = !this.contactPopup;
  };
  contactGmail(){
    this.contact = 'contact@diegoperez.es';
    this.contactPopup = !this.contactPopup;
  };

  copyContact(){
    navigator.clipboard.writeText(this.contact);
    this.contactPopup = false;
  };
  closePopup(){
    this.contactPopup = false;
  };

}
