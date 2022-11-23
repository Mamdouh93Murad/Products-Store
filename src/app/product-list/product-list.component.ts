import { Component, OnInit, ChangeDetectorRef, Input  } from '@angular/core';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent  implements OnInit {

  products : any[] = []
  totalPrice : number = 0
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
  constructor(public productService : ProductsService){

  }

  ngOnInit() : void {
    this.retrieve()
  }

  retrieve() : void {
    this.products = this.productService.products
    this.products = this.products['products']
  }

  filter(category : string){
    this.filterCategory = category
    this.productService.getFiltered(category)
    this.products = this.productService.FilteredProducts['products']

  }

}
