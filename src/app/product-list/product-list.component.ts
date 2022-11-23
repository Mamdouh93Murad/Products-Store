import { Component, OnInit, ChangeDetectorRef, Input  } from '@angular/core';
import { HttpService } from '../http.service';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent  implements OnInit {
  products : any [] = []
  categories : string[] = ["smartphones",
  "laptops",
  "fragrances",
  "skincare",
  "groceries",
  "home-decoration",
  "furniture",
  "tops",
  "womens-dresses",
  "womens-shoes",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "womens-watches",
  "womens-bags",
  "womens-jewellery",
  "sunglasses",
  "automotive",
  "motorcycle",
  "lighting"]
  value : string = ''
  filterCategory : string = ''
  constructor(public productService : ProductsService, private client : HttpService, private cdr:ChangeDetectorRef){
    this.products = this.productService.products['products']

  }

  ngOnInit() : void {
  }


  filter(category : string){
    if(category !== 'reset'){
      this.filterCategory = category
      this.productService.getFiltered(category)
      this.products = this.productService.FilteredProducts['products']
    }
    else{
      this.products = this.productService.products['products']
    }
    }

}
