import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Book } from './book';
import { BOOKS } from './mock-books';
import { BookListFilter} from './book-list-filter/bookListFilter'

@Injectable({
  providedIn: 'root',
})
export class BookService {


  getBooks(): Observable<Book[]> {

    return of(BOOKS);
  }
  getNewBooks() {
    return this.getBooks().pipe(
      // (+) before `id` turns the string into a number
      map((books: Book[]) => books.filter(book => book.year === '2024')!)
    );
  }
  getBook(id: number | string) {
    return this.getBooks().pipe(
      // (+) before `id` turns the string into a number
      map((books: Book[]) => books.find(book => book.id === +id)!)
    );
  }
  filterBook(filter: BookListFilter): Observable<Book[]>{
    return this.getBooks().pipe(
      map((books: Book[]) => books.filter(book=>{
        if(filter.collection && filter.country){
          return (book.collection.toLocaleLowerCase() == filter.collection.toLocaleLowerCase() && book.country.toLocaleLowerCase() == filter.country.toLocaleLowerCase());
        } else if(filter.collection == '' && filter.country ==''){
          return book;
        } else if(filter.country == ''){
          return book.collection.toLocaleLowerCase() == filter.collection.toLocaleLowerCase();
        } else {
          return book.country.toLocaleLowerCase() == filter.country.toLocaleLowerCase();
        }
      }))
    );
  }
}

