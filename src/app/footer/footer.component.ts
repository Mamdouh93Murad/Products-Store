import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  total : number = 0
  constructor(private productService : ProductsService)
  {

  }
  ngOnInit(): void {

  }

  ngDoCheck(){
    this.total = 0
    this.total = this.productService.cart.length
    }
}
