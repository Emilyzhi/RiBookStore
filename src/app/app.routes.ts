import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';

export const routes: Routes = [{
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'bookList',
        component: BookListComponent
      },
      {
        path: 'cart',
        component: CartComponent
      },
      {
        path: 'receipt',
        component: ReceiptComponent
      },
      { 
        path: 'book/:id', 
        component: BookDetailComponent, 
        data: { animation: 'book' } 
      },
      { 
        path: 'checkout', 
        component: CheckoutComponent,  
      },
      { 
        path: 'payment', 
        component: PaymentComponent,  
      }
    ];

