import { Component } from '@angular/core';

@Component({
  selector: 'app-amazon-solutions',
  templateUrl: './amazon-solutions.component.html',
  styleUrls: ['./amazon-solutions.component.scss']
})
export class AmazonSolutionsComponent {

  productGallery: boolean = false;
  ebc: boolean = false;
  brandStore: boolean = false;

  constructor() {
    this.productGallery = true;
  }

  ngOnInit(): void {}

  showProductGallery() {
    this.productGallery = true;
    this.ebc = false
    this.brandStore = false;
  }
  showEbc() {
    this.productGallery = false;
    this.ebc = true
    this.brandStore = false;
  }
  showBrandStore() {
    this.productGallery = false;
    this.ebc = false
    this.brandStore = true;
  }

}
