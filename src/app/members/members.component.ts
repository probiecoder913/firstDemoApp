import { Component, OnInit } from '@angular/core';
import { SharedService } from '../members.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  // newMember($event:any){
  //     console.log($event)
  // }

  constructor(private _sharedService: SharedService) {}
  ngOnInit(): void {
  }
  members = this._sharedService.members;
}
