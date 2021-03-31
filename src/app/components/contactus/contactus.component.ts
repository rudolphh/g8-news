import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  firstname:string=''
  lastname:string=''
  email:string=''
  query:string=''

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  Submit(){
    console.log('firstname: '+this.firstname)
    console.log('lastname: '+this.lastname)
    console.log('email: '+this.email)
    console.log('query: '+this.query)

    let data={'firstname':this.firstname, 'lastname':this.lastname, 'email':this.email, 'query':this.query}
    console.log(data)

    this.http.post('http://localhost:4000/addQuery', data).subscribe(data => {
      console.log({'inserted customer: ' : data});

    });
  }
}
