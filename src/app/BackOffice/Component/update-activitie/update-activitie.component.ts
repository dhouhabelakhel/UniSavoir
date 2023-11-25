import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Activite } from 'src/app/classes/activite';
import { Inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Skills } from 'src/app/classes/skills';
import { Formateur } from 'src/app/classes/formateur';
import { ActivitiesService } from 'src/app/services/activities.service';
@Component({
  selector: 'app-update-activitie',
  templateUrl: './update-activitie.component.html',
  styleUrls: ['./update-activitie.component.css']
})
export class UpdateActivitieComponent implements OnInit {
  updateAct!:FormGroup;
  constructor(
    public dialogRef: MatDialogRef<UpdateActivitieComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder:FormBuilder,public activitiesService:ActivitiesService
    ){}
  ngOnInit(): void {
    this.updateAct=this.formBuilder.nonNullable.group({
      intitule:[this.data.activitie.intitule],
      photo:[this.data.activitie.photo],
      description:[this.data.activitie.description],
      prix:[this.data.activitie.prix],
      nbplace:[this.data.activitie.nbplace],
      certification:[this.data.activitie.certification],
      date_debut: [this.data.activitie.date_debut],
      duree:[this.data.activitie.duree],
      categorie:[this.data.activitie.categorie],
      lieu:[this.data.activitie.lieu],
      skills: this.formBuilder.array([]),
      formateur: this.formBuilder.array([])
      })
      this.data.activitie.skills.forEach((skill: Skills) => {
        this.skills.push(this.formBuilder.group({
          skillName: [skill.skillName, [Validators.required, Validators.minLength(5)]],
          niveau:[skill.niveau, [Validators.required]],
        }));
      });
      this.data.activitie.formateur.forEach((formateur: Formateur) => {
        this.formateur.push(this.formBuilder.group({
          nomComplet:[formateur.nomComplet,Validators.required],
          intitule:[formateur.intitule],
              }));
      });
  }
onFileSelected(event: any) {
    const file = event.target.files[0];
  
    if (file) {
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif']; 
  
      if (allowedTypes.includes(file.type)) {
       
        const reader = new FileReader();
        reader.readAsDataURL(file);
  
        reader.onload = () => {
          this.updateAct.patchValue({
            photo: reader.result as string
          });
        };
      } else {
        console.log('Seules les images JPEG, PNG ou GIF sont autorisées.');
      }
    }
  }

  public get skills(){
    return this.updateAct.get('skills') as FormArray;
  }
  public get formateur(){
    return this.updateAct.get('formateur') as FormArray;
  }
  AddSkill(){
    this.skills.push(this.formBuilder.group({
      skillName: ['', [Validators.required, Validators.minLength(5)]],
      niveau:['', [Validators.required]],
    }))
  }
  AddFormateur(){
    this.formateur.push(this.formBuilder.group({
nomComplet:['',Validators.required],
intitule:[''],
    }))
  }

  updateActivitie(){
    this.activitiesService.editActivitie(this.data.activitie.id,this.updateAct.value).subscribe(data=>{
      console.log(data);
      
    });
      }
      
}
