import { Component, OnInit } from '@angular/core';
import { Activite } from 'src/app/classes/activite';
import { ActivitiesService } from 'src/app/services/activities.service';
import { AdminService } from 'src/app/services/admin.service';
import * as Highcharts from 'highcharts/highstock';
import { literalMap } from '@angular/compiler';
import { User } from 'src/app/classes/user';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ActchartOptions:any;
  UserchartOptions:any;
  highcharts:typeof Highcharts=Highcharts
  nbusers!:number
  users!:User[];
  nbactivities!:number;
  activities!:Activite[];
  constructor(private activitiesService:ActivitiesService,private adminService:AdminService){}
  ngOnInit(): void {
this.activitiesService.getActivities().subscribe(data=>{
  this.activities=data
this.nbactivities=data.length;
this.createActchart()

})
this.adminService.getUsers().subscribe(user=>{
  this.nbusers=user.length;
  this.users=user
  this.createUserchart();
})
  }
  createUserchart(){
    this.UserchartOptions={
      chart:{
        type:'line'
      },
      title:{
        text:'Users'
      },
      xAxis:{
        categories: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
      },
      yAxis:{
title:{
  text:'Number of users'
}
      },
      series: [
        {
         name:'Users',
         data:this.usersPerMonth(),
         color: '#bd0b49',
        }
       ]
    }
  }
  createActchart(){
this.ActchartOptions={
  chart:{
    type:'column'
  },
  title:{
    text:'Activities'
  },
  xAxis:{
    categories: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']

  },
  yAxis:{
title:{
  text:"Number of activities"
}
  },
  series: [
   {
    name:'Activities',
    data:this.activitiesPerMonth(),
    color: '#bd0b49',
   }
  ]

}
  }
  activitiesPerMonth(){
const Actcounts:number[]=Array(12).fill(0);
this.activities.forEach(activity => {
  const date=new Date(activity.date_debut)
  if(date.getFullYear==new Date().getFullYear){

const month=date.getMonth();
Actcounts[month]++;}
});
return Actcounts
  }
  usersPerMonth(){
    const usercounts:number[]=Array(12).fill(0);
    this.users.forEach(user=> {
      const date=new Date(user.date_inscreption)
      if(date.getFullYear==new Date().getFullYear){
        const month=date.getMonth();
        usercounts[month]++;
      }

    });
    return usercounts
  }
}
