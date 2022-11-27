import { Component, OnInit } from '@angular/core'
import { HttpService } from '../services/http.service'
import { ProductsService } from '../services/products.service'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: object[] = []
  categories: string[] = []
  num_products: number[] = []
  page = 1
  filterCategory = ''
  list: number[] = []
  constructor(
    public productService: ProductsService,
    private client: HttpService
  ) {
    this.products = this.productService.products
    this.categories = this.productService.categories
    this.num_products = this.productService.num_products
  }

  ngOnInit(): void {
    for (let i = 1; i <= this.productService.pages; i++) {
      this.list.push(i)
    }
  }

  // Remove any category or search filters and restore original product list
  reset() {
    this.products = this.productService.products
    this.filterCategory = ''
    this.productService.searchString = ''
    this.productService.triggered = false
  }

  // Changes Product List to contain only selected category products
  filter(category: string) {
    this.filterCategory = category
    this.client.getFiltered(category).subscribe((f) => {
      this.products = f['products']
    })
  }

  // Check for Search Trigger to update Product List according to Search Query
  ngDoCheck() {
    if (this.productService.triggered) {
      this.client.getSearch(this.productService.searchString).subscribe((f) => {
        this.products = f['products']
        this.productService.triggered = false
      })
    }
  }
  // Get Set of Products According to next Pagination Page
  next() {
    this.page += 1
    if (this.page === 1) {
      this.products = this.productService.products
    }
    this.client.getProducts(this.page - 1).subscribe((f) => {
      this.products = f['products']
    })
  }
  // Get Set of Products According to Particular Pagination Page
  // goTo(number: number) {
  //   this.page = number
  //   if (this.page === 1) {
  //     this.products = this.productService.products
  //   }
  //   this.client.getProducts(this.page - 1).subscribe((f) => {
  //     this.products = f['products']
  //   })
  // }
  // Get Set of Products According to Previous Pagination Page
  back() {
    if (this.page > 1) {
      this.page -= 1
    }
    if (this.page === 1) {
      this.products = this.productService.products
    }
    this.client.getProducts(this.page - 1).subscribe((f) => {
      this.products = f['products']
    })
  }
}
