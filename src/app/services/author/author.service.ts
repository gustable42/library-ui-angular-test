import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Author } from 'src/app/models/author';
import { Work } from 'src/app/models/work';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private endpoint = 'https://openlibrary.org/authors/';

  constructor(private httpClient: HttpClient) { }

  public getAuthor(authorKey: string): Observable<Author> {
    return this.httpClient.get<Author>(`${this.endpoint}${authorKey}.json`);
  }

  public getWorksByAuthor(authorKey: string): Observable<Work[]> {
    return this.httpClient.get<Work[]>(`${this.endpoint}${authorKey}/works.json`).pipe(
      map(works => (works as any).entries)
    );
  }
}
