import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Activite } from 'src/app/classes/activite';
import { SlectedactComponent } from '../slectedact/slectedact.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivitiesService } from 'src/app/services/activities.service';

import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-activite',
  templateUrl: './activite.component.html',
  styleUrls: ['./activite.component.css']
})
export class ActiviteComponent implements OnInit {
@Input() activitie!:Activite;
@Input() dataloaded!:boolean;
currentdate!: Date;
role!:string;
Subscribed=false;
 act!:Activite[];
 constructor(private datePipe: DatePipe, public dialog: MatDialog,
  private route :ActivatedRoute,private router: Router,
  private adminService:AdminService,
  private activitiesService:ActivitiesService){
  this.currentdate=new Date();
 }
 ngOnInit(): void {
  console.log("this.dataloaded");

  const storedSession = localStorage.getItem('session');
  if (storedSession) {
    const user = JSON.parse(storedSession);
    this.role = user.Role;
    this.act=user.listOfActivities
  } else {
    this.role = "public";
  }

}

 comparer():boolean{
 return new Date(this.activitie.date_debut)>this.currentdate;

 }
 openAct() {
   this.router.navigate(['/selectedact', this.activitie.id]);
}
Subscribe(){
if(this.role=="public")
this.router.navigate(["login"]);
else if (this.role=="user" && this.activitie.nbplace>0   ){
  if(this.act.find((activity: Activite) => activity.id === this.activitie.id))
  alert("deja inscrit!!")
else{
  const updatedNbPlace = this.activitie.nbplace - 1;
  this.activitiesService.updateNbplace(this.activitie.id,updatedNbPlace).subscribe(data=>{
    alert("succes");
    this.Subscribed=true;
    const storedSession = localStorage.getItem('session');
    if (storedSession) {
      const user = JSON.parse(storedSession);
    this.adminService.addActivityToUser(user.id, this.activitie).subscribe(data=>{

      localStorage.setItem("session", JSON.stringify(data));
    });
   }


  });
}}

}

}
