import { Component } from '@angular/core';
import { SharedService } from 'src/app/core/shared.service';

@Component({
  selector: 'app-marketing-advertising',
  templateUrl: './marketing-advertising.component.html',
  styleUrls: ['./marketing-advertising.component.scss']
})
export class MarketingAdvertisingComponent {

  productsInterested: string[] = [];

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  addProduct(product: string) {
    this.sharedService.add(product);
    console.log(this.sharedService);
  }

}
