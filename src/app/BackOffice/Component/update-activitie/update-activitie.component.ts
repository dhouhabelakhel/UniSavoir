import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Activite } from 'src/app/classes/activite';
import { Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
    private formBuilder:FormBuilder
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
      })
  }
}
