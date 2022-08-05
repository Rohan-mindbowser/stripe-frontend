import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ProductApiService } from './product-api.service';

fdescribe('ProductApiService', () => {
  let service: ProductApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ProductApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get product details', () => {
    let mockProduct = {
      id: '62df96109ea0d13986665d7e',
      images: [
        'https://m.media-amazon.com/images/I/615ekapl+pL._SL1500_.jpg',
        'https://m.media-amazon.com/images/I/81kUhm40nQL._SL1500_.jpg',
        'https://m.media-amazon.com/images/I/61jMxzQcPjL._SL1500_.jpg',
        'https://m.media-amazon.com/images/I/61jMxzQcPjL._SL1500_.jpg',
      ],
      price: 299,
      product_id: 'SKUDD5651E',
      product_name: 'New Apple Airpods (3rd Generation)',
    };

    let receivedProduct;
    service.getProduct().subscribe((product) => {
      receivedProduct = product;
      expect(receivedProduct).toBeTruthy(mockProduct);
    });
  });

  it('should return url', () => {
    let url =
      'https://checkout.stripe.com/pay/cs_test_a1yh76f8hPt4JcDS5nxZTGEKuMzlYZkiefe2uFy6S5L9CXnIdaawbIa6FP#fidkdWxOYHwnPyd1blpxYHZxWjA0TkBTUVxWT2xSZkN%2FV2tSfHZBfUJoVXRPMk5KclF8PWNWdkdBT3N%2FfUFpY0E3djdvcUN2SGhmcmNhSDBXTkpCQXJ1d0xGYXZ0bklGST1BQXZTbVJpcVFfNTVCYGRDMnZQaicpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl';

    let newUrl = String;
    // service.checkout(2).subscribe((res) => {
    //   newUrl = res;
    // });
    console.log(newUrl);
    expect(newUrl).toBeTruthy(url);
  });
});
