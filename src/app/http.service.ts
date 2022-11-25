import { Injectable } from '@angular/core';
import {observable, Observable} from 'rxjs'
import {HttpClient, HttpParams} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private client : HttpClient ) {

  }

  // Retrieve All Users
  getUsers() : Observable<any>{
    return this.client.get('https://dummyjson.com/users')
  }



  // Products Pagination
  getProducts(page : number) : Observable<any>{
    return this.client.get('https://dummyjson.com/products?',  {params : {'limit' : 9, 'skip' : page * 9}})
  }

  // Retrieve All Products
  getAllProducts() : Observable<any>{
    return this.client.get('https://dummyjson.com/products')
  }

  // Retrieve Products With particular Category
  getFiltered(name : string) : Observable<any>{

    return this.client.get(`https://dummyjson.com/products/category/${name}`)
  }

  // Retrieve Product that Match Search Query
  getSearch(str : string) : Observable<any>{
    return this.client.get('https://dummyjson.com/products/search?', {params : {'q' : str}})
  }

  // Retrieve Product by ID
  getProduct(id : string){
    return this.client.get(`https://dummyjson.com/products/${id}`)
  }

  // Authenticate User Credentials
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
  })
  .then(res =>
    res.json())
    .then(data => {
      result = data;
     })
  // .then(() => {
  //   console.log(result)})
  return result
  }

  // Retrieve Cart by User ID
  getCart(id : string | number) : Observable<any>{
    return this.client.get(`https://dummyjson.com/users/${id}/carts`)
  }

  getCategories() : Observable<any>{
    return this.client.get(`https://dummyjson.com/products/categories`)
  }
}

