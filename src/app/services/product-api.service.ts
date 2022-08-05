import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductApiService {
  constructor(private http: HttpClient) {}

  //Get product details
  getProduct(): Observable<any> {
    return this.http.get('http://localhost:5000/product/getproducts');
  }

  //Calling stripe checkout from backend
  checkout(qty: any, product_details: any): Observable<any> {
    return this.http.post(
      'http://localhost:5000/product/checkout',
      {
        quantity: qty,
        product_details,
      },
      { responseType: 'text' }
    );
  }
}
