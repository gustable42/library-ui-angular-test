import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, of, Subscription } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { Author } from 'src/app/models/author';
import { EmptyPage, Page } from 'src/app/models/page';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.scss']
})
export class AuthorsListComponent implements OnInit {
  public authors: Page<Author> = new EmptyPage<Author>();
  public searchField: string;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {}

  searchForAuthors() {
    const filter$ = this.searchField && this.searchField.length > 0 ? this.searchService.filterAuthors(this.searchField) : of(new EmptyPage());
    filter$.subscribe((authors) => {
      this.authors = authors;
    });
  }

}
