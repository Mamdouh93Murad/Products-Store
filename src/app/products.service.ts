
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { HttpService } from './http.service';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products : any[] = []
  cart : any[] = []
  filtered : any[] = []
  constructor(private client : HttpService) {
    this.client.getProducts().subscribe(p => {
      this.products = p
   })
 }


   getProducts(list : any[]) {
    this.client.getProducts().subscribe(p => {
      list = p

   })
   return list
   }

   addCart(product: any){
    this.cart.push(product)
   }

   removeCart(product : any){
    this.cart = this.cart.filter((p) => p.id !== product.id)

   }
}
