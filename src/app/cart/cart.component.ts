import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  total : number = 0
  constructor(private productService : ProductsService){
    this.total = this.productService.cart.length
  }
  ngOnInit(): void {

  }
}
