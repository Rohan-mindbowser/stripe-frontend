import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../../services/product-api.service';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.scss'],
})
export class HomescreenComponent implements OnInit {
  constructor(private _productApi: ProductApiService) {}

  products!: any;
  ngOnInit(): void {
    this._productApi.getProduct().subscribe((product) => {
      this.products = product[0];
    });
  }
  checkout(quantity: any) {
    this._productApi.checkout(quantity.value).subscribe((url) => {
      window.location.href = url;
    });
  }
}
