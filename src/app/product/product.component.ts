import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { ProductsService } from '../products.service'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: any
  inCart = false
  constructor(
    private productService: ProductsService,
    private router: Router
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {}

  // Navigate to Particular Product URL
  navigate(id: any) {
    this.router.navigate([`products/${id}`])
  }
}
