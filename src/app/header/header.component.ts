import { Component, OnInit } from '@angular/core';
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
  constructor(public userService : UsersService, private productService : ProductsService) {
  }
  ngOnInit() {

  }

  ngDoCheck(){
    this.total = 0;
    this.total = this.productService.cart.length
  }
}
