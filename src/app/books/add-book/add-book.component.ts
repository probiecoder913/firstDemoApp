import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { SharedService } from 'src/app/members.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  ngOnInit(): void {
  }
  constructor(private _sharedService: SharedService) {}

    onSubmit(form:NgForm) {
      //console.log(form);
        this._sharedService.addBook({
        'name': form.value.name, 
        'isbn': form.value.isbn,
        'availability': true, 
        'location': form.value.location, 
        });
      }
}


