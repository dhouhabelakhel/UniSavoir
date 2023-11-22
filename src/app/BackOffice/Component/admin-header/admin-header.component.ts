import { Component } from '@angular/core';
import { AddActivitiesComponent } from '../add-activities/add-activities.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent {
  constructor(public dialog: MatDialog) {}

  openAddForm() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '60%'; 
    this.dialog.open(AddActivitiesComponent);
  }
}
