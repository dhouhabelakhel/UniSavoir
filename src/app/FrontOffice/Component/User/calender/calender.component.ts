import { Component } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { MatCalendarCellClassFunction, MatCalendarCellCssClasses } from '@angular/material/datepicker';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent {

  specialDates =  ['11/130/2023', '11/11/2023']; // Dates spéciales

  constructor(private dateAdapter: DateAdapter<Date>) {}

  dateClass(date: Date): MatCalendarCellCssClasses {
    const dateString = this.dateAdapter.format(date, 'yyyy-MM-dd');
    console.log('Date actuelle : ', dateString);
    const isSpecial = this.specialDates.includes(dateString);
    console.log('Est une date spéciale : ', isSpecial);
    return isSpecial ? 'special-date' : '';
  }

}
