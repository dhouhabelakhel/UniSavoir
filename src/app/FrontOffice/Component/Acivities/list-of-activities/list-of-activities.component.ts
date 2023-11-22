import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { Activite } from 'src/app/classes/activite';
import { ActivitiesService } from 'src/app/services/activities.service';

@Component({
  selector: 'app-list-of-activities',
  templateUrl: './list-of-activities.component.html',
  styleUrls: ['./list-of-activities.component.css']
})
export class ListOfActivitiesComponent implements OnInit {
 search!:string;
 category!:string;
 categories!:string[];
  activities!:Activite[];


  constructor( private activitiesService:ActivitiesService){}
  ngOnInit(): void {

    this.activitiesService.getActivities().subscribe(data=>{
      this.activities=data;
      this.categories=this.getUniqueCategories(data);
  }) }
  private getUniqueCategories(data: Activite[]): string[] {
    const uniqueCategories = data.map(item => item.categorie).filter((value, index, self) => self.indexOf(value) === index);
    return uniqueCategories;
  }
searchact(){
  this.activities=[];
this.activitiesService.search(this.search,this.category).subscribe(data=>{
  this.activities=data;
})
}

}
