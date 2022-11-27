import { Component, OnInit } from '@angular/core'
import { HttpService } from '../services/http.service'
import { ProductsService } from '../services/products.service'
import { UsersService } from '../services/users.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // Variable for Keeping Track of Total Amount of Items in Cart
  total = 0
  // Search Query
  searchString = ''
  constructor(
    public userService: UsersService,
    public productService: ProductsService,
    private client: HttpService
  ) {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit() {}

  // Initiate Search Process by forcing Service and Component to detect change
  search() {
    this.productService.searchString = this.searchString
    this.productService.triggered = true
  }
}
