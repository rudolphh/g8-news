import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
})
export class ContactusComponent implements OnInit {

  firstname: string = '';
  lastname: string = '';
  email: string = '';
  query: string = '';

  emailMsg: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  Submit() {
    let data = {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      query: this.query,
    };
    console.log(data);

    this.http
      .post('http://g8.rudyah.com:4000/addQuery', data)
      .subscribe((success) => {
        if (success) this.emailMsg = "Well okay! We'll get right back to you";

        this.firstname = '';
        this.lastname = '';
        this.email = '';
        this.query = '';
      });
  }
}
