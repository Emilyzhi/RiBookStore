import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';
import { ActivatedRoute,ParamMap,Router,RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css'
})
export class BookDetailComponent {

  book$!: Observable<Book>;

  constructor(
    private route: ActivatedRoute,  
    private service: BookService,
    private location: Location
    ) {
  }


  ngOnInit() {
    this.book$ = this.route.paramMap.pipe(
        switchMap((params: ParamMap) => this.service.getBook(params.get('id')!)));
  }

  goBack() {
    this.location.back();
  }
}

