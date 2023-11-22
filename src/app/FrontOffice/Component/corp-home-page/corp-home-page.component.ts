import { Component, OnInit } from '@angular/core';
import { ActivitiesserviceService } from '../../servies/activitiesservice.service';

@Component({
  selector: 'app-corp-home-page',
  templateUrl: './corp-home-page.component.html',
  styleUrls: ['./corp-home-page.component.css']
})
export class CorpHomePageComponent implements OnInit {
  datalist:any;
  constructor(private activitiesserviceService:ActivitiesserviceService){}
ngOnInit(): void {
  this.activitiesserviceService.getdata().subscribe(data => {
    this.datalist = data;
  });
}}
