import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './category-list/category-list.component';

import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProductListComponent,RouterModule,FormsModule,CommonModule,CategoryListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecomm_frontend';

  constructor(public cartService: CartService){
    this.updateCartDetails();
  }
  currentProductName: string = '';

  @Output() productSearch: EventEmitter<string> = new EventEmitter<string>();  

 
  onSubmit(): void {
    console.log("app component product name:"+this.currentProductName);
    this.productSearch.emit(this.currentProductName); 
  }

  cartQuantity = 0;
  cartTotal = 0;

 

  ngOnInit(): void {
    this.cartService.totalQuantity$.subscribe(
      (quantity) => (this.cartQuantity = quantity)
    );

    this.cartService.totalPrice$.subscribe(
      (totalPrice) => (this.cartTotal = totalPrice)
    );
  }

  updateCartDetails() {
    this.cartQuantity = this.cartService.getTotalQuantity();
    this.cartTotal = this.cartService.getTotalPrice();
  }

  
}
