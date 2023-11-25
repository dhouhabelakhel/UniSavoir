import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    this.addAct = this.formBuilder.group({
      intitule: ['', [Validators.required, Validators.pattern('^[A-Z].*')]],
      photo: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]],
      prix: ['', [Validators.required, Validators.min(0)]],
      nbplace: ['', [Validators.required, Validators.min(1)]],
      certification: [''],
      date_debut: ['', Validators.required],
      duree: ['', [Validators.required, Validators.pattern('^(?:100|[1-9][0-9]?)\\.[A-Za-z]+$')]],
      categorie: ['', [Validators.required, Validators.minLength(3)]],
      lieu: ['', [Validators.required, Validators.minLength(5)]],
      skills: this.formBuilder.array([]),
      formateur: this.formBuilder.array([])
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
          this.addAct.patchValue({
            photo: reader.result as string
          });
        };
      } else {
        console.log('Seules les images JPEG, PNG ou GIF sont autorisées.');
      }
    }
  }
  


  addActivitie(){
this.activitiesService.addActivitie(this.addAct.value).subscribe(data=>{console.log(data);
});
  }
  public get skills(){
    return this.addAct.get('skills') as FormArray;
  }
  public get formateur(){
    return this.addAct.get('formateur') as FormArray;
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
}
