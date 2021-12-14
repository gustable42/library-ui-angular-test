import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from 'src/app/models/author';
import { Page } from 'src/app/models/page';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private endpoint = 'https://openlibrary.org/search/authors.json';

  constructor(private httpClient: HttpClient) { }

  public filterAuthors(name: string): Observable<Page<Author>> {
    return this.httpClient.get<Page<Author>>(this.endpoint, {params: {q: name}});
  }
}
