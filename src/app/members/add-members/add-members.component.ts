import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { SharedService } from 'src/app/members.service';

@Component({
  selector: 'app-add-members',
  templateUrl: './add-members.component.html',
  styleUrls: ['./add-members.component.css']
})
export class AddMembersComponent implements OnInit {

  ngOnInit(): void {
  }
  constructor(private _sharedService: SharedService) {}

    onSubmit(form:NgForm) {
        this._sharedService.addMember({
        'name': form.value.name, 
        'rollno': form.value.rollno,
        'course': form.value.course, 
        'email': form.value.email,
        'gender': form.value.gender
        });
    }
  // const members = new member();
  // onSubmit(form:NgForm){
  //   // this.members.push({
  //   //   'name': form.value.name, 
  //   //   'rollno': form.value.rollno,
  //   //   'course': form.value.course, 
  //   //   'email': form.value.email,
  //   //   'gender': form.value.gender
  //   // })
  //   console.log(form.value.name);
  // }
}


