import { BookService } from '../book.service';
import { Book } from '../book';
import { Observable } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../../cart/cart.service';
import { BookListFilterComponent } from '../book-list-filter/book-list-filter.component';
import { Location } from '@angular/common';
import { BookListFilter} from '../book-list-filter/bookListFilter';


@Component({
  selector: 'app-book-list',
  standalone: true,
  styles:[`
  :host{
    width:70%
  }`],
  imports: [CommonModule,RouterModule,BookListFilterComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {

  books$!: Observable<Book[]>;
  selectedId = 0;

  constructor(
    private service: BookService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    let paraFilter: BookListFilter = {
      'collection':'',
      'country':''
    };
    this.route.queryParams.subscribe(params => {
      const collection = params['collection']||'';
      paraFilter.collection = collection;
    });
    
    this.books$ = this.service.filterBook(paraFilter);
  }

  addToCart(book: Book) {
    this.cartService.addToCart(book);
    window.alert('Your book "' +book.name+ '" has been added to the cart!');
  }

  handleFilter(filters: BookListFilter) {
    this.books$ = this.service.filterBook(filters);
  }

  goBack() {
    this.location.back();
  }
}
