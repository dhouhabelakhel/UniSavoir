import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  constructor(private adminService:AdminService,private route:Router){}
logout(){
this.route.navigate(['home']);
this.adminService.logout();
}
}
