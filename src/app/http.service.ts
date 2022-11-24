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



  getProducts() : Observable<any>{
    return this.client.get('https://dummyjson.com/products')
  }


  getFiltered(name : string) : Observable<any>{

    return this.client.get(`https://dummyjson.com/products/category/${name}`)
  }

  getSearch(str : string) : Observable<any>{
    return this.client.get('https://dummyjson.com/products/search?', {params : {'q' : str}})
  }
}
