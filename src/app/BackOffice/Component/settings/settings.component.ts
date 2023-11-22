import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Admin } from 'src/app/classes/admin';
import { AdminService } from 'src/app/services/admin.service';
import { AddAdminComponent } from '../add-admin/add-admin.component';
import { EditAdminComponent } from '../edit-admin/edit-admin.component';
import { AddUserComponent } from '../add-user/add-user.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
 adminColum: string[] = ['id', 'name', 'email','actions'];
userColum: string[] = ['id', 'name','email','actions'];

  admins!:Admin[];
  users!:Admin[];
  constructor(private adminService:AdminService,public dialog: MatDialog){}
  ngOnInit(): void {
this.adminService.getAdmins().subscribe(admins=>{
  this.users=admins.filter(admin=>admin.Role=="user");
  this.admins=admins.filter(admin=>admin.Role=="admin");})
  }
  openAddAdminDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '100%'; 
    this.dialog.open(AddAdminComponent,dialogConfig);
  }
  openAddUser(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '100%'; 
    this.dialog.open(AddUserComponent,dialogConfig);
  }

  deleteAdmin(id:number){
    this.adminService.deleteAdmin(id).subscribe(() => {
      this.users = this.users.filter(admin => admin.id !== id);
     
    });
}
editAdmin(admin:Admin){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.width = '50%'; 
  dialogConfig.data = { admin };
  this.dialog.open(EditAdminComponent,dialogConfig);
}

}
