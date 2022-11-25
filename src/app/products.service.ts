
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { HttpService } from './http.service';
import { UsersService } from './users.service';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // List to Hold Products
  products : any[] = []
  // Variable Used to Keep Track of Total Items in Cart
  total_cart : number = 0
  // Search Trigger to Turn on/off on model change and right after search to prevent infinite loop on DoCheck
  triggered : boolean = false
  // Search Query
  searchString : string = ''
  // Pages Required for pagination
  pages : number = 0
  constructor(private client : HttpService, private userService : UsersService) {
    let total : number = 0

    this.client.getProducts(0).subscribe(p => {
      this.products = p['products']
   })

   this.client.getAllProducts().subscribe(p => {
    // Total Items in Product List
    total = p['total']
    // Calculate number of pages required
    // Total Number of Products / 9 (page limit) + 1
    this.pages = Math.round((total / 9) + 1)
 })

}
}
