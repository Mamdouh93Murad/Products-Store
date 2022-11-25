
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
  triggered : boolean = false
  searchString : string = ''
  length : number = 0
  constructor(private client : HttpService) {
    let total : number = 0
    this.client.getProducts(0).subscribe(p => {
      this.products = p['products']
   })
   this.client.getAllProducts().subscribe(p => {
    total = p['total']
    this.length = Math.round((total / 9) + 1)
    console.log(this.length)
 })
 }


   addCart(product: any){
    this.cart.push(product)
   }

   removeCart(product : any){
    this.cart = this.cart.filter((p) => p.id !== product.id)

   }
}
