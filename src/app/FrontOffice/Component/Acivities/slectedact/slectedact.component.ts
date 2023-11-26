import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Activite } from 'src/app/classes/activite';
import { ActivitiesService } from 'src/app/services/activities.service';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-slectedact',
  templateUrl: './slectedact.component.html',
  styleUrls: ['./slectedact.component.css']
})
export class SlectedactComponent implements OnInit{
activitie!:Activite;
id!:number;
constructor(private activitiesService:ActivitiesService,
  private router:Router,private route: ActivatedRoute){}
ngOnInit(): void {
  this.route.params.subscribe(
      params=>{this.id=params['id']}
     );
     
       this.activitiesService.getActivitieById(this.id).subscribe(data=>{
        this.activitie=data;
       })
      }
   retour(){
     this.router.navigate(['/activities']);
 
   }

}
