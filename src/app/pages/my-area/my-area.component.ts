import { Component } from '@angular/core';
import { SharedService } from 'src/app/core/shared.service';

@Component({
  selector: 'app-my-area',
  templateUrl: './my-area.component.html',
  styleUrls: ['./my-area.component.scss']
})
export class MyAreaComponent {

  productsInterested: string[] = [];

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  addProduct(product: string) {
    this.sharedService.add(product);
    console.log(this.sharedService.productsSelected);
  }

}
