import { Component } from '@angular/core';
import {CarouselModule} from "./carousel/carousel.module"
import { CommonModule } from '@angular/common';
import { BookService } from '../books/book.service';
import { Book } from '../books/book';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterModule,CarouselModule],
  styles:[`
    :host{
      width:100%
    }`],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  newBooks$!: Observable<Book[]>;
  selectedId = 0;

  constructor(
    private service: BookService,

  ) {}
  ngOnInit() {
    this.newBooks$ = this.service.getNewBooks();
  }

}
