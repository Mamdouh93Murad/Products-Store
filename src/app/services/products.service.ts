import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpService } from './http.service'
import { UsersService } from './users.service'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // List to Hold Products
  products: any[] = []
  // Variable Used to Keep Track of Total Items in Cart
  total_cart = 0
  // Search Trigger to Turn on/off on model change and right after search to prevent infinite loop on DoCheck
  triggered = false
  // Search Query
  searchString = ''
  // Pages Required for pagination
  pages = 0
  // Array to Contain Names of All Categories
  categories: string[] = []
  // Array to Contain Number of Products Per Category
  num_products: number[] = []
  constructor(private client: HttpService, private userService: UsersService) {
    let total = 0

    this.client.getProducts(0).subscribe((p) => {
      this.products = p['products']
    })

    this.client.getAllProducts().subscribe((a) => {
      // Total Items in Product List
      total = a['total']
      // Calculate number of pages required
      // Total Number of Products / 9 (page limit) + 1
      this.pages = Math.round(total / 9 + 1)
    })
    this.client.getCategories().subscribe((c) => {
      this.categories = c
      let list
      for (let i = 0; i < this.categories.length; i++) {
        this.client.getFiltered(this.categories[i]).subscribe((l) => {
          list = l['products']
          this.num_products.push(this.products.length)
        })
      }
    })
  }
}
