import { Injectable } from '@angular/core';
import { Customer } from '../common/customer';
import { Address } from '../common/address';
import { OrderData } from '../common/order-data';
import { OrderItems } from '../common/order-items';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Purchase } from '../common/purchase';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private checkoutUrl = 'http://localhost:9090/api/checkout-details'; // Replace with your API URL
  private paymentUpdateUrl = 'http://localhost:9090/update-payment-status';

  constructor(private http: HttpClient) {}

  // Method to place an order
  placeOrder(
    purchase : Purchase
  ): Observable<any> {
    console.log("checkout service details:"+purchase.customer.name);
    return this.http.post<any>(this.checkoutUrl, purchase);
  }
  updateOrderWithPaymentStatus(paymentDetails: any) {
    return this.http.post(this.paymentUpdateUrl, paymentDetails);
  }
}
