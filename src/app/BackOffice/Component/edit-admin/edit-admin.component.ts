import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Admin } from 'src/app/classes/admin';
import { userType } from '../enum/userType';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent implements OnInit {
  selectedAdmin!:Admin;
  editAdmin!:FormGroup;
  Roles= Object.values(userType); 
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private formBuilder:FormBuilder,private adminSerivce:AdminService) {
   
  }
  ngOnInit(): void {
    this.selectedAdmin=this.data.admin;
    this.editAdmin=this.formBuilder.nonNullable.group({
  userName:[this.selectedAdmin.userName],
  password:[this.selectedAdmin.password],
 email:[this.selectedAdmin.email],
fullName:[this.selectedAdmin.fullName],
adresse:[this.selectedAdmin.adresse],
phoneNumber:[this.selectedAdmin.phoneNumber],
Role:[userType.Admin]
    })
    }
    updateAdmin(){
      
      this.adminSerivce.updateAdmin(this.selectedAdmin.id,this.editAdmin.value).subscribe();
    }
}
