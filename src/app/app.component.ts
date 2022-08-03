import { Component } from '@angular/core';
import { ProductApiService } from './services/product-api.service';
import { NgxLoader } from 'ngx-http-loader';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private _productApi: ProductApiService) {}
  title = 'stripe-frontend';

  public loader = NgxLoader;

}
