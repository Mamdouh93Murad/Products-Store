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

  async auth(username : string, password : string) : Promise<any>{
  let result: any
  await fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({

    username: username,
    password: password,
    // expiresInMins: 60, // optional
  })
  }).then(res =>
    res.json())
    .then(data => {
      result = data;
     })
  // .then(() => {
  //   console.log(result)})
  return result
  }

  getCart(id : string | number) : Observable<any>{
    return this.client.get(`https://dummyjson.com/users/${id}/carts`)
  }
}

