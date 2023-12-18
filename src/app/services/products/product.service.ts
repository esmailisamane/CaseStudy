import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private mockProducts = [
    { id: 1, name: 'Product 1', price: 10.99, imageUrl: 'assets/images/product1.jpg' },
    { id: 2, name: 'Product 2', price: 19.99, imageUrl: 'assets/images/product2.jpg' },
    { id: 3, name: 'Product 3', price: 5.99, imageUrl: 'assets/images/product3.jpg' },
    { id: 4, name: 'Product 4', price: 10.99, imageUrl: 'assets/images/product1.jpg' },
    { id: 5, name: 'Product 5', price: 19.99, imageUrl: 'assets/images/product2.jpg' },
    { id: 6, name: 'Product 6', price: 5.99, imageUrl: 'assets/images/product3.jpg' }
   
  ];

  private mockCategories = [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    { id: 3, name: 'Category 3' }
  ];


  constructor() { }

  getAllProducts(): Observable<any[]> {
    // Simulate an API call by returning an Observable with the mock data
    return of(this.mockProducts);
  }

  getAllCategoy():Observable<any[]>{
    return of(this.mockCategories)
  }
}
