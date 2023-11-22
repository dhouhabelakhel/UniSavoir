import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Activite } from 'src/app/classes/activite';
import { ActivitiesService } from 'src/app/services/activities.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UpdateActivitieComponent } from '../update-activitie/update-activitie.component';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.css']
})
export class ActivitiesListComponent implements OnInit {
  displayedColumns: string[] = ['id','intitule','actions']; // Ajoutez d'autres colonnes si nécessaire
  dataSource = new MatTableDataSource<Activite>();
  pageSize = 5; // Nombre d'éléments par page
  pageSizeOptions = [5, 10, 20]; // Options de pagination

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private activitiesService: ActivitiesService,public dialog: MatDialog) {}

  ngOnInit(): void {
    this.activitiesService.getActivities().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.activitiesService.getActivities().subscribe(data => {
      this.dataSource = new MatTableDataSource(data.slice(startIndex, endIndex));
    });
  }
  deleteAct(id: number) {
    this.activitiesService.deleteActivitie(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter(activity => activity.id !== id);
     
    });
  }
editAct(act:Activite){
  const ActUpdate = new MatDialogConfig();
  ActUpdate.width = '60%'; 
  this.dialog.open(UpdateActivitieComponent, {data:{activitie:act}});

}
}
