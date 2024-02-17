import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weather'
})
export class WeatherPipe implements PipeTransform {

  transform(value: number): string {
    return (value -273.15).toFixed(2)+"C°" ;
  }

}
