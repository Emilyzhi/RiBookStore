import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListFilterComponent } from './book-list-filter.component';

describe('BookListFilterComponent', () => {
  let component: BookListFilterComponent;
  let fixture: ComponentFixture<BookListFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookListFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
