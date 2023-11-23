import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { Activite } from 'src/app/classes/activite';
import { User } from 'src/app/classes/user';


@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {

  specialDates!: string[];
  listOfActivities!: Activite[]
  user!: User;


  constructor(private dateAdapter: DateAdapter<Date>) { }
  ngOnInit(): void {
    const userData = localStorage.getItem('session');
    if (userData) {
      this.user = JSON.parse(userData);
      this.listOfActivities = this.user.listOfActivities;
      this.specialDates = [];
      this.user.listOfActivities.forEach(activity => {

        const formattedDate = this.dateAdapter.format(new Date(activity.date_debut), 'MM/DD/YYYY');
        this.specialDates.push(formattedDate);
      })
    }
  }



  dateClass(): (date: Date) => MatCalendarCellCssClasses {
    return (date: Date): MatCalendarCellCssClasses => {
      const dateString = this.dateAdapter.format(date, 'MM/DD/YYYY');
      if (this.specialDates) {
        const isSpecial = this.specialDates.includes(dateString);
        return isSpecial ? 'special-date' : '';
      }
      return '';
    };
  }

}


