import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../common/cart-item.model';
import { OrderItems } from '../common/order-items';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: CartItem[] = [];

  private totalQuantitySubject = new BehaviorSubject<number>(0);
  private totalPriceSubject = new BehaviorSubject<number>(0);

  totalQuantity$ = this.totalQuantitySubject.asObservable();
  totalPrice$ = this.totalPriceSubject.asObservable();

  constructor() {}

  //method to add product to cart
  addToCart(product: CartItem) {
    const existingItem = this.cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }

    this.updateCartTotals(); // Update totals after adding the item
  }

  //method to get all items in the cart
  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  ///Updating number of items in the cart
  updateItemQuantity(id: number, quantity: number) {
    const item = this.cartItems.find((cartItem) => cartItem.id === id);
    if (item) {
      item.quantity = quantity;
    }
    this.updateCartTotals(); // Update totals after quantity change
  }

  // Remove item from cart
  removeFromCart(id: number) {
    this.cartItems = this.cartItems.filter((item) => item.id !== id);
    this.updateCartTotals();
  }

  // Get total price of items in the cart
  getTotalPrice(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  // Get total quantity of items in the cart
  getTotalQuantity(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  // Update the total price and quantity BehaviorSubjects
  private updateCartTotals() {
    const totalQuantity = this.getTotalQuantity();
    const totalPrice = this.getTotalPrice();
    console.log('Total Quantity:', totalQuantity);
    console.log('Total Price:', totalPrice);

    this.totalQuantitySubject.next(totalQuantity);
    console.log("cartservice total quantity"+totalQuantity);
    this.totalPriceSubject.next(totalPrice);
  }

  getOrderItems(): OrderItems[] {
    return this.cartItems.map(cartItem => {
      return new OrderItems(cartItem.imageUrl, cartItem.price,cartItem.name, cartItem.quantity, cartItem.id);
    });
  }

  clearCart() {
    this.cartItems = [];
    this.totalPriceSubject.next(0);
    this.totalQuantitySubject.next(0);
    console.log('Cart has been cleared.');
  }
}
