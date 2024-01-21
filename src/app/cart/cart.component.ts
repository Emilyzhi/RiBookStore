import { Component } from '@angular/core';
import { CartService } from './cart.service';
import { CommonModule } from '@angular/common';
import { Router,RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,RouterModule],
  styles:[`
  :host{
    width:65%
  }`],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  
  items = this.cartService.getItems();
  constructor(
    private cartService: CartService,
    private router: Router
  ) {}

  checkout() {
    this.router.navigate(['/checkout']);
  }

  scan() {
    this.router.navigate(['/book']);
  }
}
