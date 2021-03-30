import { Component, OnInit } from '@angular/core';
//my import
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  city:String ="";
  location:String="";
  date= new Date().toDateString();
  description:String="";
  tempF:number=0;
  imageUrl:String="";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:4000/weather').subscribe((data: any) => {

    console.log(data);
      this.city=data.name
      this.location=data.name + ',' + data.sys.country
      this.description=data.weather[0].main
      this.imageUrl=`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`

      var tempK=data.main.temp
      this.tempF=Math.round( (tempK - 273.15) * 9/5 + 32)


    })
  }

}
