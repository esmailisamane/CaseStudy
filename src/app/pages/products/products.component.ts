import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productsArray: any[] = [];
  categoryArray: any[] = [];

  constructor(private productSrv: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
    this.loadCategories();
  }

  loadProducts() {
    this.productSrv.getAllProducts().subscribe((res: any[]) => {
      this.productsArray = res;
    });
  }

  loadCategories() {
    this.productSrv.getAllCategoy().subscribe((res: any[]) => {
      this.categoryArray = res;
    });
  }
}
