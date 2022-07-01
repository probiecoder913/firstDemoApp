import { Component, OnInit } from '@angular/core';
import { SharedService } from '../members.service';

@Component({
  selector: 'app-members',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  // newMember($event:any){
  //     console.log($event)
  // }

  constructor(private _sharedService: SharedService) {}
  ngOnInit(): void {
  }
  books = this._sharedService.books;

}
