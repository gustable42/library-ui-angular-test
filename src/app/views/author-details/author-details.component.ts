import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Author } from 'src/app/models/author';
import { Work } from 'src/app/models/work';
import { AuthorService } from 'src/app/services/author/author.service';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.scss']
})
export class AuthorDetailsComponent implements OnInit {
  public authorKey: string;
  public author: Author;
  public works: Work[] = []; 

  constructor(private authorService: AuthorService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.authorKey = this.activatedRoute.snapshot.params.key;

    forkJoin({
      author: this.authorService.getAuthor(this.authorKey),
      works: this.authorService.getWorksByAuthor(this.authorKey)
    }).subscribe(({author, works}) => {
      this.author = author;
      this.works = works;
    });
  }

}
