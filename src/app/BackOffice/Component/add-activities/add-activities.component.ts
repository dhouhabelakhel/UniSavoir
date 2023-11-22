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
    const file = event.target.files[0]; // Récupérez le fichier sélectionné
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file); // Convertissez le fichier en URL base64

      reader.onload = () => {
        // Obtenez l'URL de l'image et mettez à jour le formulaire
        this.addAct.patchValue({
          photo: reader.result as string // Mettez l'URL de l'image dans le champ 'photo'
        });
      };
    }
  }


  addActivitie(){
this.activitiesService.addActivitie(this.addAct.value).subscribe(data=>{console.log(data);
});
  }
}
