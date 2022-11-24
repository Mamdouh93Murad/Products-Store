import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ProductsService } from '../products.service';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  total: number = 0;
  searchString : string = ''
  constructor(public userService : UsersService, private productService : ProductsService, private client : HttpService) {
  }
  ngOnInit() {

  }

  // Force Change Detection to Update Cart Count Badge
  ngDoCheck(){
    this.total = 0;
    this.total = this.productService.cart.length
  }

  // Initiate Search Process by forcing Service and Component to detect change
  search(){
    this.productService.searchString = this.searchString
    this.productService.triggered = true
  }
}
