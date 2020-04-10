import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  // selector: 'pm-product-detail', //We can comment this out since we will not be nesting this as an image,rather it will be a single view page on its own
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail';
  product : IProduct;
  constructor(private activatedRoute: ActivatedRoute,private router: Router,private productService: ProductService) { }

  ngOnInit() {
    let id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;

    this.productService.getProductById(id).subscribe({
      next: product => 
      {
        this.product=product
      }
    });
  }

  onBack():void{
    this.router.navigate(['/products']);
  }



}
