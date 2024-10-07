import { Component, OnInit } from '@angular/core';
import { Category } from '../common/category';
import { CategoryService } from '../services/category.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit{


  categories:Category[]=[];

  constructor(private categoryService:CategoryService){}

  ngOnInit(): void {
      this.getAllCategories();
  }

  getAllCategories(){
    this.categoryService.getCategories().subscribe(data=>{
      this.categories=data;
    })
  }
}
