import { Injectable } from '@angular/core';
import { Book} from '../books/book';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  items: Map<Book, number> = new Map();
  addToCart(book: Book) {
      if (this.items.has(book)) {
        this.items.set(book, this.items.get(book)! + 1);
      } else {
        this.items.set(book, 1);
      }
  }

  getItems() {
    return this.items;
  }

  getTotalValue(){
    let sum = 0;
    this.items.forEach((value,key) => {
      sum += key.price*value;
    });
    return sum;
  }
}
