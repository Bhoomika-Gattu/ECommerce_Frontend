import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-failure',
  standalone: true,
  imports: [],
  templateUrl: './payment-failure.component.html',
  styleUrl: './payment-failure.component.css'
})
export class PaymentFailureComponent {

  constructor(private router: Router) {}

  retryPayment(): void {
    this.router.navigate(['/checkout']);  // Redirect to the checkout page
  }
}
