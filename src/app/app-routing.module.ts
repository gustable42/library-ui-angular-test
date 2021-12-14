import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorDetailsComponent } from './views/author-details/author-details.component';
import { AuthorsListComponent } from './views/authors-list/authors-list.component';

const routes: Routes = [
  {path: 'authors', children: [
    {path: '', component: AuthorsListComponent},
    {path: ':key', component: AuthorDetailsComponent}
  ]},
  { path: '', redirectTo: 'authors', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
