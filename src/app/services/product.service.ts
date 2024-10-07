import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = "http://localhost:8080/api/products";




  getProductsByCategory(theCategoryId: number): Observable<Product[]> {
    const searchUrl = `${this.apiUrl}/search/findByCategoryId?id=${theCategoryId}`;
    return this.http.get<GetResponse>(searchUrl)
      .pipe(map(response => response._embedded.products));
  }

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {

    return this.http.get<GetResponse>(this.apiUrl)
      .pipe(map(response => response._embedded.products));

  }

  getProductsByNameContaining(categoryName: string): Observable<Product[]>{
    const searchNameUrl = `${this.apiUrl}/search/findByNameContaining?name=${categoryName}`;
    return this.http.get<GetResponse>(searchNameUrl).pipe(map(response => response._embedded.products));
  }

  getProductById(productId:number) : Observable<Product>{
    const productUrl = `${this.apiUrl}/${productId}`;
  
    return this.http.get<Product>(productUrl);
  }
}

interface GetResponse {
  _embedded: {
    products: Product[];
  }
}
