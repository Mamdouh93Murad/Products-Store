import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { HttpService } from '../services/http.service'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private client: HttpService) {}
  product: any
  id: any

  // Retrieve Particular Product by capturing ID in URL
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.client.getProduct(this.id).subscribe((f) => {
      this.product = f
      console.log(this.product)
    })
  }
}
