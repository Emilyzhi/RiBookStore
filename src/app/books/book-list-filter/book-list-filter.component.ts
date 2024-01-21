import { Component,Input,Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule , UntypedFormBuilder} from '@angular/forms';
import { BookListFilter } from './bookListFilter';

@Component({
  selector: 'app-book-list-filter',
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './book-list-filter.component.html',
  styleUrl: './book-list-filter.component.css'
})
export class BookListFilterComponent {
  form = this.fb.group({
    collection: '',
    country: ''
  });

  

  @Output() filtered = new EventEmitter<BookListFilter>();

  constructor(private fb: UntypedFormBuilder) {}
  onSubmit(): void {
    const collection = this.form.get('collection')!.value||"";
    const country = this.form.get('country')!.value||"";
    const filters = {
      ...this.form.value,
      collection,
      country
     
    };

    this.filtered.emit(filters);
  }

}
