import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms'
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [],
  imports: [
    MatNativeDateModule,
    MatDatepickerModule,
    MatSnackBarModule ,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatListModule ,
    MatSelectModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule ,
    MatButtonToggleModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
  exports: [
    MatNativeDateModule,
    MatDatepickerModule,
    MatSnackBarModule ,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatListModule ,
    MatSelectModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule ,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatFormFieldModule

   ],
})
export class MaterialModule { }
