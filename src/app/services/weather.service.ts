import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  constructor( private http: HttpClient) { }

  getWeatherData(): Observable<any> {
    let lat =  -33.918861;
    let lon =  18.423300;
    let apiId = 'abe3fe0003118a968cff0c1a2e897dd6';
    let queryString = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiId}`;

    return this.http.get(queryString); 

  }

}
