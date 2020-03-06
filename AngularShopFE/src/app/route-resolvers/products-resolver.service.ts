import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';

import {Product} from '../models/product.model';
import {ProductDataStorageService} from '../services/product-data-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsResolverService implements Resolve<Product[]> {
  constructor(private productDataStorageService: ProductDataStorageService) {}

  resolve(): Observable<Product[]> | Promise<Product[]> | Product[] {
    return this.productDataStorageService.getAllProduct();
  }
}

