import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherData: any;
  date!: Date;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.date = new Date();
    
    this.weatherService.getWeatherByCountry("tunisie")
      .subscribe((res: any) => {
        this.weatherData = res;
      });
  }
}
