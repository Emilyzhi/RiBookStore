import { Component } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule],
  styles:[`
  :host{
    width:65%
  }`],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  items = this.cartService.getItems();
  totalValue = this.cartService.getTotalValue();

  constructor(
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.totalValue = this.cartService.getTotalValue();
  }
  
  choosePaymentMethod() {
      this.router.navigate(['/payment']);
    }
}
