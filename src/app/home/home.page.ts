import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  res: any = {
    dt: 0,
    weather: 0,
    icon: 0
  };

  constructor( private weatherAPI: WeatherService ) {}

  ngOnInit() {
    this.weatherAPI.getWeatherData().subscribe((response) => {
      this.res = response
      console.log(this.res)
    });
  }

}
