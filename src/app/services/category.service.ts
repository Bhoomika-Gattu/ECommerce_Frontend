import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Category } from '../common/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  private apiUrl="http://localhost:8080/api/category";

  getCategories(): Observable<Category[]>{

    return this.http.get<GetResponse>(this.apiUrl)
    .pipe(map(response => response._embedded.categories));

  }
}

interface GetResponse {
  _embedded: {
    categories: Category[];
  }
}
