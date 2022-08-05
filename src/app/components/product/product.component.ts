import { Component, OnInit } from '@angular/core';
import { ProductApiService } from 'src/app/services/product-api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  constructor(private _productApi: ProductApiService) {}

  products!: any;
  ngOnInit(): void {
    this._productApi.getProduct().subscribe((product) => {
      this.products = product[0];
      console.log(this.products)
    });
  }
}
