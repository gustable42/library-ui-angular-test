import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthorsListComponent } from './views/authors-list/authors-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthorDetailsComponent } from './views/author-details/author-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsListComponent,
    AuthorDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
