import { Component, OnInit } from '@angular/core'
import { HttpService } from '../services/http.service'
import { ProductsService } from '../services/products.service'
import { UsersService } from '../services/users.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: any
  constructor(
    private userService: UsersService,
    private client: HttpService,
    public productService: ProductsService
  ) {}

  // Retrieve Cart For User using ID
  ngOnInit(): void {
    this.client.getCart(this.userService.user_id).subscribe((c) => {
      this.cart = c['carts']
      this.productService.total_cart = this.cart.length
    })
  }
}
