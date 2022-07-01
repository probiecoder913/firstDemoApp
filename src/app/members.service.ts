import {  Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
    //Observable string sources\

    members=[
      {'name': "Aaran",'rollno': 102,'course': 'Btech','email': 'example@mail.com','gender': 'male'},
      {'name': "Aaren",'rollno': 103,'course': 'BSc','email':'example@mail.com','gender': 'male'},
    ];
    addMember({ name, rollno,  course, email, gender}){
      //console.log(name);
      this.members.push({
        'name': name,
        'rollno': rollno,
        'course': course, 
        'email':  email, 
        'gender': gender
      })
    }   
    
    books=[
      {'name': "C++",'isbn': 12121,'availability': true,'location': 'M-22'},
      {'name': "Python",'isbn': 12832,'availability': false,'location': 'C-11'},
    ];
    addBook({ name,  isbn, availability, location}){
      //console.log(name);
      this.books.push({
        'name': name,
        'isbn': isbn, 
        'availability':  availability, 
        'location': location
      })
    }   
}