import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Activite } from 'src/app/classes/activite';
import { Inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Skills } from 'src/app/classes/skills';
import { Formateur } from 'src/app/classes/formateur';
import { ActivitiesService } from 'src/app/services/activities.service';
import { dateValidator } from 'src/app/validators/validateDate';
@Component({
  selector: 'app-update-activitie',
  templateUrl: './update-activitie.component.html',
  styleUrls: ['./update-activitie.component.css']
})
export class UpdateActivitieComponent implements OnInit {
  updateAct!:FormGroup;
  img!:string;
  constructor(
    public dialogRef: MatDialogRef<UpdateActivitieComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder:FormBuilder,public activitiesService:ActivitiesService
    ){
    }
  ngOnInit(): void {
    this.img=this.data.activitie.photo;
    this.updateAct=this.formBuilder.nonNullable.group({
      intitule:[this.data.activitie.intitule,[Validators.required, Validators.pattern('^[A-Z].*')]],
      photo:[this.data.activitie.photo,Validators.required],
      description:[this.data.activitie.description, [Validators.required, Validators.minLength(10), Validators.maxLength(50)]],
      prix:[this.data.activitie.prix, [Validators.required, Validators.min(0)]],
      nbplace:[this.data.activitie.nbplace,[Validators.required, Validators.min(1)]],
      certification:[this.data.activitie.certification],
      date_debut: [this.data.activitie.date_debut,[Validators.required,dateValidator()]],
      duree:[this.data.activitie.duree,[Validators.required, Validators.pattern('^(?:100|[1-9][0-9]?)\\[A-Za-z]+$')]],
      categorie:[this.data.activitie.categorie,[Validators.required, Validators.minLength(3)]],
      lieu:[this.data.activitie.lieu,[Validators.required, Validators.minLength(5)]],
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
          this.img = reader.result as string;
          this.updateAct.patchValue({
            photo: this.img
          });
        };
      } else {
        console.log('Only JPEG, PNG or GIF images are allowed.');
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




isIntituleValid(): boolean {
  const intitule = this.updateAct.get('intitule');
  return !!intitule?.valid || !!intitule?.untouched;
}

get DateStart(){
return this.updateAct.get('date_debut');
}
isDateValid():boolean{
return (this.DateStart?.errors?.['DateInvalid']||this.DateStart?.errors?.['required']) && this.DateStart?.touched;
}
isDescriptionValid(): boolean {
  const description = this.updateAct.get('description');
  return !!description?.valid || !!description?.untouched;
}

isPrixValid(): boolean {
  const prix = this.updateAct.get('prix');
  return !!prix?.valid || !!prix?.untouched;
}

isNbplaceValid(): boolean {
  const nbplace = this.updateAct.get('nbplace');
  return !!nbplace?.valid || !!nbplace?.untouched;
}

isDureeValid(): boolean {
  const duree = this.updateAct.get('duree');
  return !!duree?.valid || !!duree?.untouched;
}

isCategorieValid(): boolean {
  const categorie = this.updateAct.get('categorie');
  return !!categorie?.valid || !!categorie?.untouched;
}

isLieuValid(): boolean {
  const lieu = this.updateAct.get('lieu');
  return !!lieu?.valid || !!lieu?.untouched;
}

areSkillsValid(): boolean {
  const skillsArray = this.updateAct.get('skills') as FormArray;
  return skillsArray?.valid || skillsArray?.untouched;
}

areFormateursValid(): boolean {
  const formateurArray = this.updateAct.get('formateur') as FormArray;
  return formateurArray?.valid || formateurArray?.untouched;
}

close(){
  this.dialogRef.close();
    }
}

