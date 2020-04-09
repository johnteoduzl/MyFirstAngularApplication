import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  // selector: 'pm-product-detail', //We can comment this out since we will not be nesting this as an image,rather it will be a single view page on its own
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail';
  product : IProduct;
  constructor(private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    let id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;

    this.product = {
      
    "productId": id,
    "productName": "Leaf Rake",
    "productCode": "GDN-0011",
    "releaseDate": "March 19, 2019",
    "description": "Leaf rake with 48-inch wooden handle.",
    "price": 19.95,
    "starRating": 3.2,
    "imageUrl": "assets/images/leaf_rake.png"
    }
  }

  onBack():void{
    this.router.navigate(['/products']);
  }

}
