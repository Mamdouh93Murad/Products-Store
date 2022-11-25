import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ProductsService } from '../products.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cart : any
  constructor(private userService : UsersService, private client : HttpService, public productService : ProductsService){

  }
  ngOnInit(): void {
    this.client.getCart(this.userService.user_id).subscribe(c => {
      this.cart = c['carts']
      this.productService.cart_length = this.cart.length})
  }
}
