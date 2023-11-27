import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Activite } from 'src/app/classes/activite';
import { ActivitiesService } from 'src/app/services/activities.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateActivitieComponent } from '../update-activitie/update-activitie.component';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.css']
})
export class ActivitiesListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'intitule', 'actions'];
  dataSource = new MatTableDataSource<Activite>();
  data = new MatTableDataSource<Activite>();
  pageSize = 5;
  pageSizeOptions = [5, 10, 20];
  activities!: Activite[];
  filteredDataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private activitiesService: ActivitiesService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.activitiesService.getActivities().subscribe(data => {
      this.activities = data;
      this.dataSource = new MatTableDataSource(data);
      this.data = this.dataSource;
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

  editAct(act: Activite) {
    const dialogRef = this.dialog.open(UpdateActivitieComponent, {
      height: '90%',
      width: '60%',
      data: { activitie: act }
    });
  }

  applyFilter(event: Event) {
    const value = (event.target as HTMLInputElement).value.trim().toLowerCase();

    if (value === '') {
      this.dataSource = this.data;
    } else {
      this.dataSource = new MatTableDataSource(
        this.data.data.filter((activity: any) => {
          return activity.intitule.toLowerCase().includes(value);
        })
      );
    }

    this.dataSource.paginator = this.paginator;
  }
}
