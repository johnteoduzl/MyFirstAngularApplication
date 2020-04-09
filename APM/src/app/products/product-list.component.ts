import { Component,OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({

    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit
{
    pageTitle: string = "Product Listings";
    imageWidth: number =50;
    imageMargin: number = 2;
    showImage: boolean = false;
    _listFilter: string = '';
    filteredProducts:IProduct[]=[];
    products : IProduct[]=[];
    errorMessage:string='';

    get listFilter():string{
      return this._listFilter;
    }
    set listFilter(value:string)
    {
      this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    

      constructor(private productService : ProductService)
      {
       
        // this.productService.getProducts().subscribe({
        //   next: products=> {
        //     this.products=this.products
        //     this.filteredProducts=this.products;
        //   },
        //   error: err=> this.errorMessage = err
        // });
      }

      toggleImage():void{

        this.showImage=!this.showImage;
      }

      ngOnInit():void{
        
        this.productService.getProducts().subscribe({
          next: products=> {
            this.products=products
            this.filteredProducts=this.products;
          },
          error: err=> this.errorMessage = err
        });
        console.log('In OnInit');
      }


      performFilter(filterBy: string):IProduct[]
      {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product : IProduct)=> product.productName.toLocaleLowerCase().indexOf(filterBy)!==-1);
      }

      onRatingClicked(message: string):void
      {
        this.pageTitle='Product List: '+message;
      }

} 