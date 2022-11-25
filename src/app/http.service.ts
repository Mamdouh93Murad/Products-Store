import { Injectable } from '@angular/core';
import {observable, Observable} from 'rxjs'
import {HttpClient, HttpParams} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private client : HttpClient ) {

  }
  getUsers() : Observable<any>{
    return this.client.get('https://dummyjson.com/users')
  }



  getProducts(page : number) : Observable<any>{
    return this.client.get('https://dummyjson.com/products?',  {params : {'limit' : 9, 'skip' : page * 9}})
  }

  getAllProducts() : Observable<any>{
    return this.client.get('https://dummyjson.com/products')
  }

  getFiltered(name : string) : Observable<any>{

    return this.client.get(`https://dummyjson.com/products/category/${name}`)
  }

  getSearch(str : string) : Observable<any>{
    return this.client.get('https://dummyjson.com/products/search?', {params : {'q' : str}})
  }

  getProduct(id : string){
    return this.client.get(`https://dummyjson.com/products/${id}`)
  }
}
