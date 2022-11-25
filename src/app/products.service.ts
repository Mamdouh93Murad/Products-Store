
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { HttpService } from './http.service';
import { UsersService } from './users.service';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products : any[] = []
  cart_length : number = 0
  triggered : boolean = false
  searchString : string = ''
  length : number = 0
  constructor(private client : HttpService, private userService : UsersService) {
    let total : number = 0

    this.client.getProducts(0).subscribe(p => {
      this.products = p['products']
   })

   this.client.getAllProducts().subscribe(p => {
    total = p['total']
    this.length = Math.round((total / 9) + 1)
 })

}
}
