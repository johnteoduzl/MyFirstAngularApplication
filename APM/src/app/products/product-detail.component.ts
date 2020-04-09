import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  // selector: 'pm-product-detail', //We can comment this out since we will not be nesting this as an image,rather it will be a single view page on its own
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail';
  product : IProduct;
  constructor() { }

  ngOnInit() {
  }

}
