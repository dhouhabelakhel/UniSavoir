import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivitiesService } from 'src/app/services/activities.service';

@Component({
  selector: 'app-add-activities',
  templateUrl: './add-activities.component.html',
  styleUrls: ['./add-activities.component.css']
})
export class AddActivitiesComponent implements OnInit {
  addAct!:FormGroup;
  constructor(private formBuilder:FormBuilder,private activitiesService:ActivitiesService){}
  ngOnInit(): void {
this.addAct=this.formBuilder.nonNullable.group({
intitule:[''],
photo:[''],
description:[''],
prix:[''],
nbplace:[''],
certification:[''],
date_debut: [''],
duree:[''],
categorie:[''],
lieu:[''],
})
  }
  
  onFileSelected(event: any) {
    const file = event.target.files[0]; 
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file); 

      reader.onload = () => {
        this.addAct.patchValue({
          photo: reader.result as string 
        });
      };
    }
  }


  addActivitie(){
this.activitiesService.addActivitie(this.addAct.value).subscribe(data=>{console.log(data);
});
  }
}
