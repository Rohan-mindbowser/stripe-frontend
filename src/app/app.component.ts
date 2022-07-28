import { Component } from '@angular/core';
import { ProductApiService } from './services/product-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private _productApi: ProductApiService) {}
  title = 'stripe-frontend';


}
