import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { RouterModule, Routes } from '@angular/router';
import { AddMembersComponent } from './members/add-members/add-members.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BooksComponent } from './books/books.component';
import { AddBookComponent } from './books/add-book/add-book.component';

const appRoutes: Routes = [
    { path: 'members', component: MembersComponent, children: [{ path: 'add-members', component: AddMembersComponent}]},
    { path: 'books', component: BooksComponent, children: [{ path: 'add-book', component: AddBookComponent}]},
  ];

@NgModule({
  

  declarations: [
    AppComponent,
    MembersComponent,
    AddMembersComponent,
    BooksComponent,
    AddBookComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
